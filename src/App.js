import React, { Component } from 'react';
import logo from './logo.svg';
import ImageCaption from './ImageCaption.js';
import RedBox from './RedBox.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import './App.css';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {
  
  renderImage(image){
    //console.log(image, "my image 1")
      return(
          <ImageCaption key={image.id} src={image.source} text={image.text}/>
        );
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {console.log("Hello")}
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <hr/>
        
        <div className="image-div">
          <h2> Testing ImageCaption </h2> 
          <ImageCaption src="http://i.imgur.com/D8JWn.jpg" text="Rainbow Cat"/>
        </div>
        <hr/>
        
        {/*Rendering the list of images*. Using Map, dont need to use forEach, since using map*/}
        <div>
          {imageList.map(this.renderImage)}
        </div>
        <hr/>
        
        <RedBox>
          <h2> Testing Red Box </h2>
          <p>This will be in the red box</p>
          <img alt="This too!" src="http://placekitten.com/g/200/200"/>
        </RedBox>
        <hr/>
        
        <Layout>
          <h2> About Us </h2>
          <p>We are <a href="https://facebook.github.io/react/">React</a> Developers</p>
        </Layout>
        <hr/>
        
        <GuessTheNumber numberToGuess="13">
          <p>Playing Guess The number</p> {/*This wont show anywher as it needs to called with this.props.children*/}
        </GuessTheNumber> 
        <hr/>
        
      </div>
    );
  }
}

export default App;
