import React from 'react';

class CharacterCounter extends React.Component {
    constructor(props){
        super();
        this.state = {currentInput: ""};
        
        this._handleInput = this._handleInput.bind(this);
    }
    
    _handleInput(event){
        this.setState({currentInput: this.refs.userInput.value});
    }
    
    render() {
        return(
            <div>
                <input type="text" ref="userInput" onInput={this._handleInput}/>
                <p>{this.state.currentInput ? this.state.currentInput.length : ''}</p>
            </div>
        );
    }
}

export default CharacterCounter;