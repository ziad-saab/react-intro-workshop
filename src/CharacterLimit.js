import React from 'react';

class CharacterLimit extends React.Component {
    constructor(props){
        super(props);
        this.defaultProps = {
            limit : +props.limit
        };
        
        this.state = {
            userInput: ""
        };
        
        this._handleInput = this._handleInput.bind(this);
    }
    
    _handleInput(event){
        if (event.target.value.length <= this.props.limit) {
            this.setState({userInput: event.target.value});
        }
    }
    
    render() {
        return(
            <div>
                <input type="text" onInput={this._handleInput} value={this.state.userInput} />
                <p>{this.props.limit - this.state.userInput.length} characters remaining</p>
            </div>
        );
    }
}

export default CharacterLimit;