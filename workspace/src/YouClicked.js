import React from 'react';

class YouClicked extends  React.Component {
    constructor(){
        super();
        this.state = {
            timesClicked : 0,
            returnMSG : ""
        };
    }

    _handleButtonClick(){
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });

        this._clickCounter();
    }

    _handleResetClick(){
        this.setState({
            timesClicked : 0,
            resetTimes: this.state.resetTimes + 1 || 1,
            returnMSG : "You clicked meh zero!"
        });
    }

    _clickCounter(){

        if (this.state.timesClicked === 0) {
            this.setState({
                returnMSG : "You clicked meh zero!"
            });
        }
        else if (this.state.timesClicked === 1){
            this.setState({
                returnMSG : "You clicked meh once!"
            });
        }
        else if (this.state.timesClicked === 2){
            this.setState({
                returnMSG : "You clicked meh twice!"
            });
        }
        else {
            this.setState({
                returnMSG : "You clicked meh " + this.state.timesClicked + " times!"
            });
        }

    }

    _messageRender(){
        return(
            <div>
                <h3>{this.state.returnMSG}</h3>
                <h3>{this.state.resetTimes}</h3>
            </div>
        );
    }

    render(){
        return (
            <div>
                <button onClick={this._handleButtonClick.bind(this)}> Click meh!</button>
                <button onClick={this._handleResetClick.bind(this)}> Reset! </button>
                {this._handleButtonClick ? this._messageRender() : ""}
            </div>
        );
    }
}

export default YouClicked;

/*
{this.state.returnMSG ? <h3> {this.state.returnMSG} </h3> : ""}
{this.state.resetTimes ? <h3> you reset {this.state.resetTimes} times </h3> : ""}
*/