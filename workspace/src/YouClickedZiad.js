import React, {Component} from 'react';
import RedBoxZiad from "./RedBoxZiad";

class YouClickedZiad extends Component{
    constructor(){
        super();
        this.state = {
            timesClicked: 0,
            timesReset : 0
        };

        this.handleClick = this.handleClick.bind(this); //This is preferred than to binding in the rendering to decrease workload (as binding would happen each render)
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(){
        this.setState({
            timesClicked: this.state.timesClicked + 1
        });
    }

    handleReset(){
        this.setState({
            timesClicked : 0,
            timesReset: this.state.timesReset + 1
        });
    }

    render(){


        var times = this.state.timesClicked;
        var reset = this.state.timesReset;

        return (
            <RedBoxZiad>
                <p>
                    <button onClick={this.handleClick} type="button">Click!</button>
                    <button onClick={this.handleReset} type="button">Reset!</button>
                </p>
                <p>
                    {
                        times === 0 ? 'you never clicked' :
                        times === 1 ? 'clicked once' :
                        times === 2 ? 'clicked twice' :
                        `You clicked ${times} times`
                    }
                </p>
                {
                    reset === 0 ? null :
                    <p>
                        {
                            reset === 1 ? "you reset once" :
                            reset === 2 ? "you reset twice" :
                            `you reset ${reset} times`
                        }
                    </p>
                }
            </RedBoxZiad>
        );
    }
}

export default YouClickedZiad;

