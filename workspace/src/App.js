import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RedBox from "./RedBox";
import ImageCaption from "./ImageCaption";
import Layout from "./Layout.js";
import GuessTheNumber from "./GuessTheNumber.js";
import YouClicked from "./YouClicked";
import CharacterCounter from "./CharacterCounter";
import CharacterLimit from "./CharacterLimit";
import NumberGuessing from "./NumberGuessing";

var imageList = [
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];

class App extends Component {

    renderImage(imageObj) {
        return (
            <ImageCaption source={imageObj.source} text={imageObj.text} alternate="KekCats" key={imageObj.id}/>
        );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <hr/>
                <h2>Testing ImageCaption</h2>
                <ImageCaption source="http://i.imgur.com/D8JWn.jpg" alternate="KEK" text="Kitten: I am working!"/>
                <hr/>
                <div>
                    {imageList.map(this.renderImage)}
                </div>
                <hr/>
                <h2>RedBox</h2>
                <RedBox>
                    <p>This will be in the red box</p>
                    <img alt="This too!" src="http://placekitten.com/g/200/200"/>
                </RedBox>
                <hr/>
                <h2>Testing Layout</h2>
                <Layout>
                    <h2> About us </h2>
                    <p> We are React developers </p>
                </Layout>
                <hr/>
                <h2>Guess between 1 and 100</h2>
                <GuessTheNumber number={10} />
                <hr/>
                <h2>Click button states</h2>
                <YouClicked/>
                <hr/>
                <h2>Character Counter</h2>
                <CharacterCounter/>
                <hr/>
                <h2>Character Limit</h2>
                <CharacterLimit value="hello" limit={10}/>
                <hr/>
                <h2>Number guessing game</h2>
                <NumberGuessing/>
                <hr/>
            </div>
        );
    }
}

export default App;
