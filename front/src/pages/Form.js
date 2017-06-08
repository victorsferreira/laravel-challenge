import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { hashHistory } from 'react-router'
import {Link} from 'react-router';

import ClientModel from '../models/client';
import PurchaseModel from '../models/purchase';
import ProductModel from '../models/product';

const Models = {
    client: ClientModel,
    purchase: PurchaseModel,
    product: ProductModel
};

class Form extends Component {
    constructor(){
        super();

        this.state = {
            fields: {},
            relationship_collections: {},
            relationships:[]
        }

        this.fields = {};
    }

    componentWillMount(){
        if(this.props.route.path != 'new'){
            Axios.get('http://localhost:8000/'+this.props.model.collection+'/'+this.props.params.id)
            .then((response)=>{
                console.log('RESPONSE: ',response)
                if(response.status == 200){
                    var item = response.data.data;
                    this.fields = item.attributes;
                    this.id = item.id;
                    if(response.data.included) this.setState({relationships: response.data.included});
                    this.setFields(item.attributes);
                }
            }).catch((err)=>{
                console.log(err)
                alert('Not found')
            });
        }

        this.setFields(this.props.model.fields,'');
        this.getRelationships();
    }

    getRelationships(){
        var field;
        for(var k in this.props.model.fields){
            field = this.props.model.fields[k];

            if(field.type == 'reference'){
                this.getRelationship(field.collection);
            }
        }
    }


    getRelationship (collection){
        var data;
        Axios.get('http://localhost:8000/'+collection)
        .then((response)=>{
            if(response.status == 200){
                var relationship_collections = this.state.relationship_collections;
                relationship_collections[collection] = response.data.data;
                this.setState({relationship_collections: relationship_collections})
            }
        }).catch((err)=>{
            console.log(err)
            alert('Not found 1'+collection)
        });
    }

    setFields(fields, default_value=null){
        var new_fields = {};
        var value;

        for(var k in this.props.model.fields){
            if(default_value !== null && default_value !== undefined) value = default_value;
            else value = fields[k];
            new_fields[k] = value;
        }

        fields = Object.assign(this.state.fields,new_fields);
        this.setState({fields: fields});
    }

    save(){
        var data = Object.assign(this.fields,this.state.fields);
        for(var k in data){
            if(Array.isArray(data[k])) delete data[k];
        }

        var request = {
            data: {
                type: this.props.model.resource || this.props.model.collection,
                attributes: data
            }
        };

        request.data.attributes.deleted_at = null;

        if(this.props.route.path != 'new'){
            delete request.data.attributes['id'];

            request.data.attributes.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

            Axios.put('http://localhost:8000/'+this.props.model.collection+'/'+this.props.params.id,request)
            .then((response)=>{
                console.log('response put', response)
            }).catch((err)=>{
                console.log('err',err)
            });
        }else{
            request.data.attributes.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
            request.data.attributes.updated_at = null;

            Axios.post('http://localhost:8000/'+this.props.model.collection,request)
            .then((response)=>{
                console.log('response post', response)
                if(response.status == 201){
                    hashHistory.push('/'+this.props.model.collection+'/'+response.data.data.id)
                }
            }).catch((err)=>{
                console.log('err',err)
            });
        }
    }

    changeValue(input,key){
        var fields = this.state.fields;
        fields[key] = input;

        this.setState({fields: fields});
    }

    render() {
        var field, type;

        var fields = Object.keys(this.props.model.fields).map((k, i) => {
            field = this.props.model.fields[k];
            type = field.type;

            if(type == 'string'){
                return (<input type='text' key={i} onChange={(event)=>{
                    this.changeValue(event.target.value,k)
                }} value={this.state.fields[k]} />);
            }else if(type == 'reference'){

                if(this.state.relationship_collections[field.collection]){
                    var options = this.state.relationship_collections[field.collection].map((option, i)=>{
                        return (<option key={i} value={option.attributes.id}>{option.attributes[field.key]}</option>);
                    });
                }

                return (
                    <select onChange={(value)=>{
                            var fields = this.state.fields;
                            fields[k] = value.target.value;

                            this.setState({
                                fields: fields
                            });
                        }} key={i} value={this.state.fields[k]}>
                        {options}
                    </select>
                )
            }
        }
    );

    var relationship_types = {};
    this.state.relationships.map((relationship, i)=>{
        if(!(relationship.type in relationship_types)) relationship_types[relationship.type] = [];
        relationship_types[relationship.type].push(relationship);
    });

    var relationship, object;
    var relationships = Object.keys(relationship_types).map((relationship_type, i)=>{
        relationship = relationship_types[relationship_type];
        var items = relationship.map((item, j)=>{
            object = new Models[relationship_type]();
            object.setFields(item.attributes);
            object.id = item.id;

            return (
                <li key={j}>
                    <Link to={object.getHref()}>
                        {object.getListLabel()}
                    </Link>
                </li>
            );
        });

        return (
            <div key={i}>
                <h3>{Models[relationship_type].title}</h3>
                <ul>{items}</ul>
            </div>
        )
    });
    
    return (
        <div className="form">
            <form>
                {fields}

                <button type='button' onClick={()=>{
                        this.save();
                    }}>Salvar</button>
                </form>

                <ul>
                    {relationships}
                </ul>
            </div>
        );
    }
}

export default Form;
