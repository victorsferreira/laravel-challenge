import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Axios from 'axios';
import {Link} from 'react-router';

class List extends Component {
    constructor(){
        super();

        this.state = {
            items: [],
            has_next_page: false,
            has_previous_page: false,
            current_page: 1
        };
    }

    componentWillMount(){
        this.setState({current_page: this.props.params.number || 1})
    }

    componentDidMount(){
        this.requestItems();
    }

    requestItems(){
        Axios.get('http://localhost:8000/'+this.props.resource+'/?page[size]=3&page[number]='+this.state.current_page)
        .then((response)=>{
            var has_previous_page = false, has_next_page = false;
            var response_data = response.data;
            var page = response_data.meta.page;

            if(page.number < 1) has_previous_page = true;
            if(page.number < page.total) has_next_page = true;

            this.setState({
                items: response_data.data,
                has_previous_page: has_previous_page,
                has_next_page: has_next_page
            });
        });
    }

    delete(id){
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
                    <Link to={'clients/'+item.id}>{item.attributes.cpf}</Link>
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

                {
                    this.state.has_previous_page ? (
                        <Link to={"/clients/page/"+(parseInt(this.state.current_page)-1)}>Anterior</Link>
                    ) : null
                }

                { this.state.has_previous_page && this.state.has_next_page ? ( '|' ) : null }

                {
                    this.state.has_next_page ? (
                        <Link to={"/clients/page/"+(parseInt(this.state.current_page)+1)}>Próxima</Link>
                    ) : null
                }
            </div>
        );
    }
}

export default List;
