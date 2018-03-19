import React, { Component } from 'react';

class InputText extends Component {
    onChange(){
        this.props.onChange.apply(null, arguments);

    }
    render(){
        return (
            <input type="text" 
                value={this.props.value}
                onChange={e => this.onChange(e)}
            />
        )
    }
}

export default InputText;