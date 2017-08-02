import React, {Component} from 'react';

class MyInput extends Component {

    constructor(){
        super();
        this.state = {
            inputValue: ''
        };
    }

    handleInput(event){
        console.log(event.target.value);
        if (event.target.value.length <= 10){
            this.setState({
                inputValue: event.target.value
            });
        }
    }

    render(){ //Controlled component, input component that are we controlling ourselves
        return(
            <div>
                <h1>Type a tweet</h1>
                <input value={this.state.inputValue} type="text" onInput={this.handleInput.bind(this)} />
                <h3>len = {this.state.inputValue.length}</h3>
            </div>
        );
    }
}

export default MyInput;