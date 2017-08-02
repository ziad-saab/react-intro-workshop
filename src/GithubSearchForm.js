import React from 'react';

class GithubSearchForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  //compare with other functions where event was passed
  _handleSubmit(event){
    event.preventDefault();
    
    //console.log(`Submit button form =${this.refs.userInput.value}`); 
    //onSearch is a prop of GithubSearchForm (set when the tag is used)
    //it is being passed a ref from the input box
    this.props.onSearch(this.refs.userInput.value);
    //this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref='userInput'/>
        <button type='submit'>Go!</button>
      </form>
    );
  }
};

export default GithubSearchForm;