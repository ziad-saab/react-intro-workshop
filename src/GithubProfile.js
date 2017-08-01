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
    
    fetchData() {
        let GITHUB_API_URL = 'https://api.github.com/users/';
        let GITHUB_API_TOKEN = 'db627e327d938e3f3bde5e56c6dbfa161a75080f';
        console.log(`Fetching! = ${GITHUB_API_URL}${this.props.username}`); //Test
        fetch(`${GITHUB_API_URL}${this.props.username}?access_token=${GITHUB_API_TOKEN}`)
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
    
    componentDidMount(){
        this.fetchData();
    }
    
    componentDidUpdate(prevProps, prevState){
        //event.preventDefault();
        
        //console.log(`Component updated previous=${prevProps} current=${this.props}`); //Test
        if (prevProps.username !== this.props.username) {
            this.fetchData();
        }
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
                    <p>{this.props.username} ({this.state.name})</p>
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