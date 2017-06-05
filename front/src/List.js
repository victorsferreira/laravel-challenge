import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class List extends Component {
    constructor(){
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount(){
        this.requestItems();
    }

    requestItems(){
        Axios.get('http://localhost:8000/'+this.props.resource)
        .then((response)=>{
            // console.log()
            this.setState({
                items: response.data.data
            })
        });
    }

    delete(id){
        // Axios.delete('http://localhost:8000/'+this.props.resource+'/'+id,{})
        // .then((response)=>{
        //     console.log('response delete', response)
        // }).catch((err)=>{
        //     console.log('err',err)
        // });

        Axios({
            method: 'delete',
            url: 'http://localhost:8000/'+this.props.resource+'/'+id,
            data: {}
        }).then((response)=>{
            if(response.status == 204){
                var items = this.state.items.filter((item)=>{
                    return item.id != id
                });

                this.setState({items: items})
            }
        })
    }

    render() {
        var items = this.state.items.map((item,i)=>{
            return (
                <div key={i}>
                    <a href={'/#/client/'+item.id}>
                        {item.attributes.cpf}
                    </a>
                    <button onClick={()=>{
                            this.delete(item.id)
                        }}>
                        Delete
                    </button>
                </div>
            );
        })

        return (
            <div className="list">
                <h1>Lista</h1>
                <h1>{this.props.name}</h1>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}

export default List;
