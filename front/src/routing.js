import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import React, {Component} from 'react';
import App from './App';
import Client from './Client';
import Purchase from './Purchase';
import Product from './Product';
import List from './List';
import Form from './Form';

// <Route path='edit' component={Edit} />
// <Route path='create' component={Create} />

// <Route path='purchase' component={Purchase} />
// <Route path='product' component={Product} />
export const renderRoutes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path='clients' component={Client}>
                <IndexRoute component={List}/>
                <Route path='page/:number' component={List} />
                <Route path='new' component={Form} />
                <Route path=':id' component={Form} />
            </Route>
            <Route path='products' component={Product}>
                <IndexRoute component={List}/>
                <Route path='page/:number' component={List} />
                <Route path='new' component={Form} />
                <Route path=':id' component={Form} />
            </Route>
        </Route>
    </Router>
);
