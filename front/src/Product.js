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
            name: {type: 'string'},
            price: {type: 'string'},
            bar_code: {type: 'string'},
            // purchase: {type: 'reference', collection: 'purchases', key: 'id'}
        }

        this.relationships = {
            purchase: {
                title: 'compras',
                label: [
                    {key: 'date', text: 'Data'},
                    {key: 'client_id', text: 'Id do Cliente'}
                ]
            }
        }
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                collection: 'products',
                resource: 'product',
                label: 'name',
                fields: this.fields,
                relationships: this.relationships
            })
        );

        return (
            <div className="product">
                <h1>Produto</h1>
                <Link to="/products/new">Novo Produto</Link>
                {children}
            </div>
        );
    }
}


export default Client;
