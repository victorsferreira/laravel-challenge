import React, { Component } from 'react';
import Axios from 'axios';

class Input extends Component {
    constructor(){
        super();

        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.setValue(this.props);
    }

    setValue(input){
        this.setState({value: input.value});
    }

    render() {
        return (
            <div className="input">
                {
                    this.props.label ? (
                        <label>{this.props.label}</label>
                    ) : null
                }

                <input onChange={this.setValue.bind(this)} />
            </div>
        );
    }
}

export default Input;
