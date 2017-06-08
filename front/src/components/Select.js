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
            return (<option key={i} value={option.attributes.id}>{option.attributes[field.key]}</option>);
        });

        return (
            <select key={this.props.key} className={this.props.class} onChange={(event)=>{
                    this.setState({value: event.target.value});
                    this.props.onChange(event.target.value);
                }} value={this.state.value}>

                {options}
            </select>
        );
    }
}

export default Select;
