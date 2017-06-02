import React, { Component } from 'react';
// import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

class App extends Component {
    constructor(){
        super();

        // var data = {
        //     data: {
        //         type: "client",
        //         attributes: {
        //             name: "NilPortugues.com",
        //             email: "Portuguéxxxs",
        //             cpf: "1231231222321",
        //         	created_at: '2017-06-08 00:00:00',
        //             updated_at: '2017-06-08 00:00:00',
        //             deleted_at: null
        //         }
        //     }
        // };
        //
        // Axios.post('http://localhost:8000/clients',data)
        // .then((response)=>{
        //     console.log(response)
        // });
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
