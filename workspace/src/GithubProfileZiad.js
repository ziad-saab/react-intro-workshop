import React, {Component} from 'react';
import GithubProfileElementZiad from "./GithubProfileElementZiad";

class GithubProfileZiad extends Component{
    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.username}`)
            .then(r => r.json())
            .then( (data) => {
               this.setState({
                   user: data
               });
            });
    }

    render () {

        if (this.state.user){
            // JSX will know to execute the function below if it is not a React Component class but a function
            return (
                <GithubProfileElementZiad user={this.state.user}/>
            );
        }
        else {
            return (
                <div>
                    loading...
                </div>
            );
        }
    }
}

export default GithubProfileZiad;