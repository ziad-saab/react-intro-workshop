import React from 'react';

class GithubProfile extends React.Component {
    //props will have username which is mandatory
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){
        //fetch data when componenet is mounted
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState){
        //if a new username was entered, we must re-render the data 
        //dont need a this.prevState here
        if(prevState.name !== this.props.username){
            this.fetchData();
        }
    }
    
    fetchData() {
        var GITHUB_API_URL = 'https://api.github.com/users/';
        
        fetch(`${GITHUB_API_URL}${this.props.username}`)
        .then (response => response.json())
        .then (profileInfo => {
            this.setState({
                login: profileInfo.login,
                name: profileInfo.name,
                bio: profileInfo.bio,
                avatar_url: profileInfo.avatar_url
            });
        });
    }
    
    render(){
        return(
            <div className="github-profile">
                <img className="github-profile-avatar" src={this.state.avatar_url} alt={this.state.name}/>
                <div className="github-profile-info">
                    <p>{this.state.login} {this.state.name}</p>
                    <p>{this.state.bio}</p>
                </div>
            </div>
            );  
    }
}

export default GithubProfile;