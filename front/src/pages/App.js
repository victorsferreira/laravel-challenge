import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
// import '../css/App.css';

class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

export default App;
