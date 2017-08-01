import React from 'react';

class GithubSearchForm extends React.Component {

    _handleSubmit(event) {

        event.preventDefault();

        var searchFunction = this.props.onSearch;
        searchFunction(this.refs.userInput.value);

    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <p>Enter a GitHub username:</p>
                <input type="text" ref="userInput" />
                <button>Go!</button>
            </form>
        );
    }
};

export default GithubSearchForm;