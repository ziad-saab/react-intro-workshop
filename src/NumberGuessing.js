import React from 'react';

class NumberGuessing extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    
    //_startGame() will use this.setState to reset the game. It will set the gameStatus to playing, 
    //the numberToGuess using Math.random, and the guesses to an empty array.
    // = () => is the shorthand for binding _startGame to this ALWAYS!! 
    _startGame = () =>{
        //NTS:dont have to use state.propName when inside setStatus
        console.log(this.state.gameStatus, "the gameStatus within _startGame")
        
        this.setState({
            gameStatus: "playing",
            numberToGuess: Math.floor(Math.random() * (100 - 1)) + 1,
            guesses: [],
            guessString: ""
        });
    }
    
    
    _handleButtonClick(event){
        event.preventDefault();
        
        console.log(this.state.numberToGuess);
        console.log(Number(this.refs.userGuess.value));
        
        let currentGuesses = this.state.guesses;
        currentGuesses.push(this.refs.userGuess.value)
        
        if(Number(this.refs.userGuess.value) === this.state.numberToGuess){
            this.setState({
                guessString: "YOU GOT IT, YOU WIN :) !!", 
                gameStatus: "win",
                guesses: currentGuesses
            });
        }
        else if (Number(this.refs.userGuess.value) < this.state.numberToGuess){
            this.setState({guessString:"TOO LOW :( !!"});
            if(+this.state.guesses.length >= 5){
                this.setState({
                    gameStatus: "lose", 
                    guessString: "YOU LOSE :(!!",
                    guesses: currentGuesses
                });
            }
        }
        else {
            this.setState({guessString:"TOO HIGH :( !!"});
            if(+this.state.guesses.length >= 5){
                this.setState({
                    gameStatus: "lose", 
                    guessString: "YOU LOSE :(!!",
                    guesses: currentGuesses
                });
            }
        }
    }
    
    componentDidMount(){
        this._startGame();
    }
    
    render(){
        if(this.state.gameStatus === undefined){
            //Need to know how this works
            return null;
        }
        else if(this.state.gameStatus === "win" || this.state.gameStatus === "lose"){
            return (
                //without a form
                //with form would have to a event.preventDefault in _startGame function
                    <div>
                        <p>{this.state.guessString}</p>
                        <p>Click button to restart!!</p>
                        <input type="button" value="Restart" onClick={this._startGame}/>
                    </div>
            );
        }
        
        return (
            //using for as I am using a prevent default in _handleButtonClick
            //Could have done it without the form tags and using onClick on button instead
            <form className="number-guessing-form" onSubmit={this._handleButtonClick.bind(this)}>
                {/*The name tag is not being used, ref tagged used in _handleButtonClick()*/}
                <p>Guess a Number between 1 and 100</p>
                <p>Your guesses: {this.state.guesses[0]} {this.state.guesses[1]} {this.state.guesses[2]} {this.state.guesses[3]} {this.state.guesses[4]} </p>
                <p>Number of guesses left: {5-this.state.guesses.length}</p>
                <p>{this.state.guessString}</p>
                Guess The Number: <input type="text" ref="userGuess" name="number"/>
                <input type="submit" value="Guess"/>
            </form>
        );
    }
}

export default NumberGuessing;


/*
    Since you'll be starting a game from multiple places (initial mounting, and clicking NEW GAME), 
    your constructor function should assign an empty object to this.state. You should have a method 
    called _startGame that will use this.setState to reset the game. It will set the gameStatus to playing, 
    the numberToGuess using Math.random, and the guesses to an empty array.
    
    In the render method, if this.state.gameStatus is not defined, simply return null.
    
    The next thing you'll want to do is start a new game when the component gets mounted in the DOM. 
    There happens to be a method that you can implement in your component that will be called exactly 
    as soon as the component gets mounted: componentDidMount. If you add this method to your component, 
    React will call it right after your component is displayed on the screen. 
    In this method, you can call this._startGame() to make this happen. 
    This will in turn call setState, which will re-render your component. 
    At that point the game will start :)
    
*/



