import React, {Component} from 'react';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            time : 0
        };
    }

    componentDidMount(){
        this.timerId = setInterval(()=>
        {
            this.setState ({time : this.state.time + 1});
        }  , 1000);
    }

    componentWillUnmount() { //Without this we get an error as the state keeps updating and checking even when the DOM element is not there.
        clearInterval(this.timerId);
    }

    render(){
        return(
            <div>
                {this.state.time}
                {/*<button onClick={()=>clearInterval(this.timerId)}>STOP TIMER</button>*/}
            </div>
        );
    }
}

export default Timer;