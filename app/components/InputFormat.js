import React, { Component } from 'react';
import InputText from './InputText';

function WrappedInputFormat(InputComponent){
    return class InputFormat extends Component {
        constructor(props){
            super(props);

            this.state={
                value: ''
            }
        }
        format(e){
            this.setState({
                value: e.target.value+","
            })
        }
        render(){
            return(
                <InputComponent 
                    value={this.state.value}
                    onChange={ e => this.format(e) }
                />
            )
        }
    }
}

export default WrappedInputFormat(InputText);