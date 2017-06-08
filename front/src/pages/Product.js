import React, { Component
    // , PropTypes
} from 'react';
import {Link} from 'react-router';
import Model from '../models/product';

class Product extends Component {
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
            <div className="product">
                <h1>Produto</h1>
                <Link to="products/new">Novo Produto</Link>
                {children}
            </div>
        );
    }
}


export default Product;
