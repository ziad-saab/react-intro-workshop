import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <p>Enter a GitHub username:</p>
        <input type="text" />
        <button>Go!</button>
      </form>
    );
  }
}

export default SearchForm;