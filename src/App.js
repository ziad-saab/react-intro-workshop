import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from './ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import YouClicked from './YouClicked.js';
import CharacterCounter from './CharacterCounter';
import CharacterLimit from './CharacterLimit';
import NumberGuessing from './NumberGuessing.js';
import GithubProfile from './GithubProfile.js';
import GithubSearch from './GithubSearch.js';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  // renderImage(map) {
  //   let imageList = map.map(item => {
  //     return <ImageCaption key={item.id} source={item.source} text={item.text} />;
  //   });
    
  //   return (imageList);
  // }
  // Was used in app: {this.renderImage(imageList)}
  
  renderImage(img) {
    return <ImageCaption key={img.id} source={img.source} text={img.text} />;
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <h2>testing ImageCaption</h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="Rainbow-tailed cat" />
        <hr />
          <div>
            {imageList.map(this.renderImage)}
          </div>
        <hr />
          <div>
            <h2>Testing Layout</h2>
            <Layout>
              <h2>About Us</h2>
              <p>We are <a href='https://facebook.github.io/react'>React</a> developers!</p>
            </Layout>
          </div>
        <hr />
        <div>
          <h2>Testing GuessTheNumber (1-100)</h2>
          <GuessTheNumber numberToGuess='42' />
        </div>
        <hr />
          <h2>Testing YouClicked</h2>
          <YouClicked />
        <hr />
          <h2>Testing CharacterCounter</h2>
          <CharacterCounter />
        <hr />
          <h2>Testing CharacterLimit</h2>
          <CharacterLimit limit="15" />
        <hr />
          <h2>Testing NumberGuessing</h2>
          <NumberGuessing />
        <hr />
          <div>
            <h2>Testing GithubProfile</h2>
            <GithubProfile username="tsirrus" />
          </div>
        <hr />
          <div>
            <h2>Testing GithubSearch</h2>
            <GithubSearch />
          </div>
        <hr />
      </div>
    );
  }
}

export default App;
