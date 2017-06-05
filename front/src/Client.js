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
            name: {type: 'string'}
        }
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                resource: 'clients',
                resource_singular: 'client',
                fields: this.fields
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

// App.propTypes = {
//     name: PropTypes.string
// };

// Client.defaultProps = {
//     name: 'My Page Name'
// };


export default Client;
