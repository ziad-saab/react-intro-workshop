import React from 'react';
import PropTypes from 'prop-types';

class GuessTheNumber extends React.Component {

    _handleButtonClick(event) {

        event.preventDefault();

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
            <form onSubmit={this._handleButtonClick.bind(this)}>
                <input type="text" ref="userGuess"/>
                <button > Guess </button>
            </form>
        );
    }
}

GuessTheNumber.propTypes = {
    number:  PropTypes.number.isRequired
};

export default GuessTheNumber;