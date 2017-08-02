import React from 'react';
import PropTypes from 'prop-types';

class CharacterLimit extends React.Component{

    constructor(){
        super();
        this.state = {
            currentInput : ""
        };
    }

    _handleInput(event){ //get the value from the input box and set to the currentInput state property
        var value = event.target.value;

        if (value !== this.state.currentInput){

            if ( value.length <= this.props.limit ) {
                this.setState({
                    currentInput : value
                });
            }

        }

    }

    render(){
        return (
            <div>
                <input type="text" onInput={this._handleInput.bind(this)} value={this.state.currentInput} />
                <p>{this.props.limit - this.state.currentInput.length } Chars remaining </p>
            </div>
        );
    }
}

CharacterLimit.propTypes ={
    limit: PropTypes.number.isRequired
};

export default CharacterLimit;