import React, { Component } from 'react';
import Axios from 'axios';

class Select extends Component {
    constructor(){
        super();

        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.setState({value: this.props.value || ''});
    }

    render() {
        var options = this.props.options.map((option, i)=>{
            return (<option key={i} value={option.value}>{option.text}</option>);
        });

        return (
            <div key={this.props.key} className="select">
                {
                    this.props.label ? (
                        <label className={this.props.labelClass}>{this.props.label}</label>
                    ) : null
                }

                <select className={this.props.class} onChange={(event)=>{
                        this.setState({value: event.target.value});
                        this.props.onChange(event);
                    }} value={this.state.value}>

                    {options}
                </select>
            </div>
        );
    }
}

export default Select;
