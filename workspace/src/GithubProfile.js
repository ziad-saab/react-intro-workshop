import React from 'react';

class GithubProfile extends React.Component{
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {
        var that = this;
        fetch("https://api.github.com/users/" + this.props.username)
            .then(r => r.json())
            .then( ( function (responseJSON) {
                this.setState({ //could also put that.setState
                   user : responseJSON
                });
            } ).bind(this) ); //could also do (function(){--}).bind(this) inside the then() block
    }

    componentDidUpdate(prevProps){ //This is necessary because even if the prop changes and it re-renders the fetchData method is not re-called
        if (prevProps.username !== this.props.username){
            this.fetchData();
        }
    }

    render() {
        return (
            <div>
            {
                this.state.user ?
                    <div className="github-user">
                        <img className="github-user__avatar" src={"https://avatars.githubusercontent.com/u/" + this.state.user.id + "?v=3"} alt="githubPic" />
                        <div className="github-user__info">
                            <p>{this.state.user.login} {this.state.user.name}</p>
                            <p>{this.state.user.bio}</p>
                            {this.props.username} this would update even without componentDidUpdate()
                        </div>
                    </div>
                    :
                    null
            }
            </div>
        );
    }
}

export default GithubProfile;