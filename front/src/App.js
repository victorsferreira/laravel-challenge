import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:8000/posts')
        .then((response)=>{
            this.setState({
                posts: response.data
            })
        });
    }

    render() {
        var posts = this.state.posts.map((post,i)=>{
            return (
                <div key={i}>{post.title}</div>
            );
        });

        return (
            <div className="App">
                <h1>{this.props.name}</h1>
                <div>
                    {posts}
                </div>
            </div>
        );
    }
}

App.propTypes = {
  name: PropTypes.string
};

App.defaultProps = {
  name: 'My Page Name'
};


export default App;
