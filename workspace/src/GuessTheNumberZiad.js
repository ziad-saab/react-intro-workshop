import React, {Component} from 'react';

class GuessTheNumberZiad extends Component {

    checkInput(e){
        e.preventDefault();

        console.log(this.refs.userGuess.value); //Try to access DOM directly as little as possible
    }

    // componentDidMount(){ //Not the best method to add an eventListener in React, as there could be a memory leak after the rendered object leaves as we have a reference
    //     this.refs.userForm.addEventListener('submit', this.checkInput.bind(this)); //Just add ref="userForm" to the form
    // }

    render() {
        //Below are virtual DOM elements not real DOM elements that are React.createElement
        // Have to get access to the REAL DOM element via 'refs'
        return (
            <form onSubmit={this.checkInput.bind(this)}>
                <input type="text" ref="userGuess"/>
                <button type="submit">Check</button>
            </form>
        );
    }
}

export default GuessTheNumberZiad;