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

    render() {
        var items = this.state.items.map(function(item,i){
            return (
                <div key={i}>
                    <a href={'/#/client/'+item.id}>
                        {item.attributes.cpf}
                    </a>
                    <button onClick={()=>{
                            alert('deletar')
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