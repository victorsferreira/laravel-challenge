import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { hashHistory } from 'react-router'
import {Link} from 'react-router';
// import Input from './Input';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            fields: {},
            relationships:[]
        }

        this.fields = {};
    }

    componentWillMount(){
        if(this.props.route.path != 'new'){
            Axios.get('http://localhost:8000/'+this.props.resource+'/'+this.props.params.id)
            .then((response)=>{
                console.log(response)
                if(response.status == 200){
                    var item = response.data.data;
                    this.fields = item.attributes;
                    this.id = item.id;
// console.log(response.data.included)
                    this.setState({relationships: response.data.included});
                    this.setFields(item.attributes);
                }
            }).catch(()=>{
                alert('Not found')
            });
        }

        this.setFields(this.props.fields,'');
    }

    setFields(fields, default_value=null){
        var new_fields = {};
        var value;

        for(var k in this.props.fields){
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
                type: this.props.resource_singular || this.props.resource,
                attributes: data
            }
        };

        request.data.attributes.deleted_at = null;

        if(this.props.route.path != 'new'){
            delete request.data.attributes['id'];

            request.data.attributes.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');

            Axios.put('http://localhost:8000/'+this.props.resource+'/'+this.props.params.id,request)
            .then((response)=>{
                console.log('response put', response)
            }).catch((err)=>{
                console.log('err',err)
            });
        }else{
            request.data.attributes.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
            request.data.attributes.updated_at = null;

            Axios.post('http://localhost:8000/'+this.props.resource,request)
            .then((response)=>{
                console.log('response post', response)
                if(response.status == 201){
                    hashHistory.push('/'+this.props.resource+'/'+response.data.data.id)
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

        var fields = Object.keys(this.props.fields).map((k, i) => {
            field = this.props.fields[k];
            type = field.type;

            if(type == 'string'){
                return (<input type='text' key={i} onChange={(event)=>{
                    this.changeValue(event.target.value,k)
                }} value={this.state.fields[k]} />);
            }
        });

        var relationships = this.state.relationships.map(function(relationship, i){
            return (
                <Link key={i} to={relationship.links.self.href}>{relationship.attributes.date}</Link>
            )
        })

        return (
            <div className="form">
                <form>
                    {fields}

                    <button type='button' onClick={()=>{
                            this.save();
                        }}>Salvar</button>
                </form>

                {relationships}
            </div>
        );
    }
}

export default Form;
