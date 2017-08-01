import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
    
    this._handleSearch = this._handleSearch.bind(this);
  }
  
  _handleSearch(searchTerm) {
    //console.log(`handling search for ${searchTerm}`); //Test
    this.setState({user : searchTerm});
  }
  
  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch} />
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
}

export default GithubSearch;