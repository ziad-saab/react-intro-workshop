import React from 'react';
//import fetch from 'isomorphic-fetch';

class GithubProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        
        this.defaultProps = {
            username : props.username
        };
    }
    
    componentDidMount() {
        let GITHUB_API_URL = 'https://api.github.com/users/';
        //console.log(`${GITHUB_API_URL}${this.props.username}`); //Test
        fetch(`${GITHUB_API_URL}${this.props.username}`)
        .then (r => r.json())
        .then (data => {
            //console.log(data); //Test
            this.setState({
                name: data.name,
                bio: data.bio,
                avatar_url: data.avatar_url
            });
        });
    }
    
    render(){
        return (
            <div className="github-user" style={githubUserStyle}>
                <img className="github-user__avatar"
                    src={this.state.avatar_url}
                    alt={this.state.name}
                    style={imgStyle}
                />
                <div className="github-user__info">
                    <p>{this.state.username} ({this.state.name})</p>
                    <p>{this.state.bio}</p>
                </div>
            </div>
        );
    }
}

var imgStyle = {
    width : "75px",
    height : "75px",
    borderRadius: "50%"
};

var githubUserStyle = {
    display: "flex",
    justifyContent : "center"
};

export default GithubProfile;