import React from 'react';

class CharacterCounter extends React.Component{

    constructor(){
        super();
        this.state = {
            currentInput : ""
        };
    }

    _handleInput(event){ //get the value from the input box and set to the currentInput state property
        var value = event.target.value;
        this.setState({
            currentInput : value
        });
    }

    render(){
        return (
            <div>
                <input type="text" onInput={this._handleInput.bind(this)}/>
                <p>{this.state.currentInput.length}</p>
            </div>
        );
    }
}

export default CharacterCounter;