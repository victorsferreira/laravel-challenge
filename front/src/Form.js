import React, { Component } from 'react';
import Axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            id: '',
            name: '',
            cpf: '',
            email: ''
        }

        this.action=null;
    }

    componentDidMount(){
        if(this.props.route.path != 'new'){
            Axios.get('http://localhost:8000/'+this.props.resource+'/'+this.props.params.id)
            .then((response)=>{
                if(response.status == 200){
                    var item = response.data.data;
                    this.setState(item.attributes);
                }
            }).catch(()=>{
                alert('Not found')
            });
        }
    }

    save(){
        if(this.props.route.path != 'new'){
            Axios.put('http://localhost:8000/'+this.props.resource+'/'+this.props.params.id,{

            })
            .then((response)=>{
                console.log('response put', response)
            }).catch((err)=>{
                console.log('err',err)
            });
        }else{
            Axios.post('http://localhost:8000/'+this.props.resource,{

            })
            .then((response)=>{
                console.log('response post', response)
            }).catch((err)=>{
                console.log('err',err)
            });
        }
    }

    render() {
        return (
            <div className="form">
                <form>
                    <input value={this.state.name} />
                    <input value={this.state.email} />
                    <input value={this.state.id} />
                    <input value={this.state.cpf} />

                    <button onClick={()=>{
                            this.save();
                        }}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default Form;
