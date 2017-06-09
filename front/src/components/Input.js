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
            <div key={this.props.key} className="input" key={this.props.key}>
                {
                    this.props.label ? (
                        <label className={this.props.labelClass}>{this.props.label}</label>
                    ) : null
                }

                <input className={this.props.class} type="text" value={this.state.value} className={this.props.class} onChange={(event)=>{
                        this.setState({value: event.target.value});
                        this.props.onChange(event);
                    }} />
            </div>
        );
    }
}

export default Input;
