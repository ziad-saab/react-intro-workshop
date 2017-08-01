import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <GithubSearchForm/>
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
}

export default GithubSearch;