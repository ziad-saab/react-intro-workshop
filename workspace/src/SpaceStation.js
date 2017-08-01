import React, {Component} from 'react';

class SpaceStation extends Component {

    constructor(){ //Object gets initialized
        super();
        this.state = {};
        console.log('constructor');
    }

    fetchPosition(){
        fetch("http://api.open-notify.org/iss-now.json")
            .then( r => r.json() )
            .then( data => {
                this.setState({
                    issPosition: data.iss_position
                });
            });

    }

    componentDidMount(){ //Object successfully mounted
        console.log('component did mount!');
        this.fetchPosition();
    }

    render(){

        return(
            <div>
                <button onClick={this.fetchPosition.bind(this)}> Get ISS position </button>
                {
                    this.state.issPosition ?
                        <div> {`ISS POSITION : ${this.state.issPosition.latitude}, ${this.state.issPosition.longitude}`} </div>
                        :
                        null
                }
            </div>
        );
    }
}

export default SpaceStation;