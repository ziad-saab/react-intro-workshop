import React from 'react'; //TODO: Ask Ziad if this is proper design (to have a render message for each condition)

class NumberGuessing extends React.Component {

    constructor(){
        super();
        this.state = {};
    }

    _startGame(){
        this.setState({
            gameStatus : "playing",
            numberToGuess : Math.floor(Math.random() * 100 + 1),
            guesses : [],
        });
    }

    _checkLoss(){
        if (this.state.guesses.length > 4  && this.state.gameStatus === "playing"){
            this.setState ({
                gameStatus: "lose"
            });
        }
    }

    _handleButtonClick() {
        var userTry = Number(this.refs.userGuess.value);
        if (userTry <  this.state.numberToGuess) {
            this.setState ({
                guesses : this.state.guesses.concat([userTry])
            });
        }
        else if (userTry > this.state.numberToGuess){
            this.setState ({
                guesses : this.state.guesses.concat([userTry])
            });
        }
        else {
            this.setState ({
                guesses : this.state.guesses.concat([userTry]),
                gameStatus : "win"
            });
        } //TODO: Ask Ziad or Mathieu: Does the rendering (life cycle) of a component happen in the middle of a function or after its execution?!

        this._checkLoss();
    }

    componentDidMount() {
        this._startGame();
    }

    _renderMsg (){
        if (this.state.gameStatus === "playing" && this.state.guesses.length === 0) {
            return (
                <div>
                    <h4>Guess between 1 and 100</h4>
                    <input type="text" ref="userGuess"/>
                    <button onClick={this._handleButtonClick.bind(this)}> Guess Num! </button>
                </div>
            );
        }
        else if (this.state.gameStatus === "playing" && this.state.guesses.length > 0){
            return (
                <div>
                    <h4>Guess between 1 and 100</h4>
                    <h4>Your guesses: {this.state.guesses.map( (arrayItem) => arrayItem + ", " )} </h4> /* This simply spaces out the array nicely on the UI */
                    <h4>{ (this.state.guesses[this.state.guesses.length - 1] < this.state.numberToGuess) ? "Too low" : "Too high" }</h4>
                    <input type="text" ref="userGuess"/>
                    <button onClick={this._handleButtonClick.bind(this)}> Guess Num! </button>
                </div>
            );
        }
        else if (this.state.gameStatus === "win"){
            return (
                <div>
                    <h2>YOU WIN!</h2>
                    <button onClick={this._startGame.bind(this)}> New Game</button>
                </div>
            );
        }
        else { //i.e. lose condition
            return (
                <div>
                    <h2>YOU LOSE!</h2>
                    <button onClick={this._startGame.bind(this)}> New Game</button>
                </div>
            );
        }
    }

    render() {
        if (this.state.gameStatus === undefined) { //TODO: undefined or !this.state.gameStatus
            return null;
        }
        return (
                this._renderMsg()
        );
    }

}

export default NumberGuessing;