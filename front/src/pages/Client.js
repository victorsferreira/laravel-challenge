import React, { Component
    // , PropTypes
} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Link} from 'react-router';
import Model from '../models/client';

class Client extends Component {
    constructor(){
        super();
        // this.fields = Model.getMeta().fields;
        // this.relationships = Model.getMeta().relationships;
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                // collection: Model.getMeta().collection,
                // resource: Model.getMeta().resource,
                label: 'cpf',
                // fields: Model.getMeta().fields,
                // relationships: Model.getMeta().relationships,
                model: Model
            })
        );

        return (
            <div className="client">
                <h1>Cliente</h1>
                <Link to="clients/new">Novo cliente</Link>
                {children}
            </div>
        );
    }
}


export default Client;
