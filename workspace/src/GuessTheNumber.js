import React from 'react';
import PropTypes from 'prop-types';

class GuessTheNumber extends React.Component {

    _handleButtonClick() {
        var guess = parseInt(this.refs.userGuess.value, 10); //2nd param is radix (decimal num)
        if (guess === this.props.number) {
            alert("Correct!");
        }
        else if ( guess < this.props.number) {
            alert("Your guess is lower than correct ans");
        }
        else {
            alert ("Your guess is higher than correct ans");
        }
    }

    render(){
        return (
            <div>
                <input type="text" ref="userGuess"/>
                <button onClick={this._handleButtonClick.bind(this)}> Guess </button>
            </div>
        );
    }
}

GuessTheNumber.propTypes = {
    number:  PropTypes.number.isRequired
};

export default GuessTheNumber;