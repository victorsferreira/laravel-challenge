import React, { Component
    // , PropTypes
} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class Client extends Component {
    constructor(){
        super();
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                resource: 'clients'
            })
        );

        return (
            <div className="client">
                <h1>Cliente</h1>
                <a href='/#/client/new'>Novo cliente</a>                
                {children}
            </div>
        );
    }
}

// App.propTypes = {
//     name: PropTypes.string
// };

Client.defaultProps = {
    name: 'My Page Name'
};


export default Client;
