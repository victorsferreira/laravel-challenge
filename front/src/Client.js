import React, { Component
    // , PropTypes
} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';

class Client extends Component {
    constructor(){
        super();
        this.fields = {
            cpf: {type: 'string'},
            email: {type: 'string'},
            name: {type: 'string'},
            // purchase: {type: 'reference', collection: 'purchases', key: 'id'}
        }

        this.relationships = {
            purchase: {
                title: 'compras',
                label: [
                    {key: 'date', text: 'Data'},
                    {key: 'product_id', text: 'Id do Produto'}
                ]
            }
        }
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                collection: 'clients',
                resource: 'client',
                label: 'cpf',
                fields: this.fields,
                relationships: this.relationships
            })
        );

        return (
            <div className="client">
                <h1>Cliente</h1>
                <Link to="/clients/new">Novo cliente</Link>
                {children}
            </div>
        );
    }
}


export default Client;
