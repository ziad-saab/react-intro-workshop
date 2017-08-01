import React from 'react';


class YouClicked extends React.Component {
    constructor(props) {
        super();
        this.state = {
            timesClicked : 0,
            timesReset: 0
        };
    }
    
    _handleButtonClick(event) {
        this.setState({timesClicked: this.state.timesClicked + 1});
    }

    _handleButtonReset(event) {
        this.setState({
            timesClicked: 0,
            timesReset: this.state.timesReset + 1
        });
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={(event) => {this._handleButtonClick(event)}}>Click Me!</button>
                <button type="button" onClick={(event) => {this._handleButtonReset(event)}}>Reset Clicks!</button>
                <p>{
                    this.state.timesClicked === 0? "You have not clicked the button" : 
                    this.state.timesClicked === 1? "You have clicked the button once" :
                    this.state.timesClicked === 2? "You have clicked the button twice" : "You have clicked the button " + this.state.timesClicked + " times."
                }</p>
                <p>{
                    this.state.timesReset === 0? "" : "You have reset " + this.state.timesReset + " times."
                }</p>
            </div>
        );
    }
}

export default YouClicked;