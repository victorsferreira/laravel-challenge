import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import React, {Component} from 'react';

import App from './pages/App';
import Client from './pages/Client';
import Purchase from './pages/Purchase';
import Product from './pages/Product';
import List from './pages/List';
import Form from './pages/Form';

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
            <Route path='purchases' component={Purchase}>
                <IndexRoute component={List}/>
                <Route path='page/:number' component={List} />
                <Route path='new' component={Form} />
                <Route path=':id' component={Form} />
            </Route>
        </Route>
    </Router>
);
