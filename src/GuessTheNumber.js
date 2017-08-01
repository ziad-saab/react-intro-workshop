import React from 'react';

class GuessTheNumber extends React.Component {
    
    _handleButtonClick(event){
        event.preventDefault();
        
        console.log(Number(this.props.numberToGuess));
        console.log(Number(this.refs.userGuess.value));
        if(Number(this.props.numberToGuess) === Number(this.refs.userGuess.value)){
            alert('You guessed the number :) !!');
        }
        else if (Number(this.props.numberToGuess) > this.refs.userGuess.value){
            alert('The Number you guessed is too low!!');
        }
        else {
            alert('The Number you guessed is too high!!');
        }
        /*{(Number(this.props.numberToGuess) === Number(this.refs.userGuess.value))
            ? alert('You guessed the number :) !!')
            : (Number(this.props.numberToGuess) > this.refs.userGuess.value)
                ? alert('The Number you guessed is too low!!')
                : alert('The Number you guessed is too high!!')
        }*/
    }
    
    render(){
        return (
            <form className="guess-the-number-form" onSubmit={this._handleButtonClick.bind(this)}>
                {/*The name tag is not being used, ref tagged used in _handleButtonClick()*/}
                Guess The Number: <input type="text" ref="userGuess" name="number"/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
    
}

export default GuessTheNumber;

/*
class TheForm extends React.Component {
      fetchWeather(event) {
        event.preventDefault();

        render({isLoading: true});

        fetch('http://api.open-notify.org/iss-now.json')
        .then(r => r.json())
        .then(data => {
          render({isLoading: false, weather: data})
        })
      }
      render() {

        return (
          <form className="weather-form" onSubmit={this.fetchWeather}>
            <input type="text" name="city" />
            <button type="submit">Check weather!</button>
          </form>
        );
      }
    }*/