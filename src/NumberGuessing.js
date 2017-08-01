import React from 'react';

class NumberGuessing extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount() {
        this._startGame();
    }
    
    _startGame(event) {
        this.setState({
            gameStatus: 'playing',
            numberToGuess: Math.floor(Math.random()*99) + 1,
            tries: 5,
            numberGuessed: [],
            message: ''
        });
    }
    
    _handleButtonClick(event) {
        
        var number = +this.refs.userGuess.value;
        var currentGuesses = this.state.numberGuessed;
        currentGuesses.push(number);

        if (number === this.state.numberToGuess) {
            this.setState({
                gameStatus: 'win',
                message: 'You got the number!'
            });
        }
        else if (number > this.state.numberToGuess) {
            this.setState({
                tries: this.state.tries - 1,
                numberGuessed: currentGuesses,
                message: 'You guessed too high!'
            });
        }
        else {
            this.setState({
                tries: this.state.tries - 1,
                numberGuessed: currentGuesses,
                message: 'You guessed too low!'
            });
        }
        
        if (this.state.tries === 1) {
            this.setState({
                gameStatus: 'lose'
            });
        }
    }
    
    render() {
        if (!this.state.gameStatus) {
            return null;
        }
        else if (this.state.gameStatus === 'playing') {
            return(
                <div>
                    <p>Guess a number between 1 and 100</p>
                    <p>Your guesses {this.state.numberGuessed.toString()}</p>
                    <p>{this.state.message}</p>
                    <p>Guesses left: {this.state.tries}</p>
                    <input type="text" ref="userGuess" />
                    <button type='button' onClick={(event) => {this._handleButtonClick(event)}}>Guess!</button>
                </div>
            );
        }
        else {
            return(
                <div>
                    <p>YOU {this.state.gameStatus === 'win'? "WIN!" : "LOSE!"}</p>
                    <button type='button' onClick={(event) => {this._startGame(event)}}>New Game</button>
                </div>
            );
        }
    }
}

export default NumberGuessing;