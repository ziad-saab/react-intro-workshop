import React from 'react';

class GuessTheNumber extends React.Component {
    constructor(props) {
        super(props);
    }
    
    _handleButtonClick(event) {
        //event.preventDefault();
        
        if (this.refs.userGuess.value === this.props.numberToGuess) {
            alert('You are correct');
        }
        else if (this.refs.userGuess.value > this.props.numberToGuess) {
            alert('You are higher than the number');
        }
        else {
            alert('You are lower than the number');
        }
        
    }
    
    render() {
        return (
            <form>
                <input type="text" ref="userGuess" />
                <button type='button' onClick={(event) => {this._handleButtonClick(event)}}>Guess!</button>
            </form>
        );
    }
}

export default GuessTheNumber;