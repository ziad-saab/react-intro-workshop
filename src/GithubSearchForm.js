import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  _handleSubmit(event){
    event.preventDefault();
    
    //console.log(`Submitting=${this.refs.userInput.value}`); //Test
    this.props.onSearch(this.refs.userInput.value);
  }
  
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref='userInput' />
        <button type='submit'>Go!</button>
      </form>
    );
  }
}

export default SearchForm;