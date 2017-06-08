import React, { Component
    // , PropTypes
} from 'react';
import {Link} from 'react-router';
import Model from '../models/purchase';

class Purchase extends Component {
    constructor(){
        super();
    }

    render() {
        const children = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                model: Model
            })
        );

        return (
            <div className="purchase">
                <h1>Compras</h1>
                <Link to="purchases/new">Nova Compra</Link>
                {children}
            </div>
        );
    }
}


export default Purchase;
