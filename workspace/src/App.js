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
import DoesNotNeedToBeSameClassName from "./ImageCaptionZiadAnswer";
import RedBoxZiad from "./RedBoxZiad";
import GuessTheNumberZiad from "./GuessTheNumberZiad";
import YouClickedZiad from "./YouClickedZiad";
import SpaceStation from "./SpaceStation";
import Timer from "./Timer";
import MyInput from "./MyInput";
import GithubProfile from "./GithubProfile";
import GithubSearch from "./GithubSearch";
import GithubProfileZiad from "./GithubProfileZiad";

var imageList = [ //unique keys are necessary for sorting and accessing specific indexes of the array instead of re-rendering the whole thing (saves bandwidth and processing power)
    {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
    {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
    {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
]; //Could use another global variable array to be mapped and pass it below, but usually does not appear in real-code.

React.createElement(SpaceStation); //NOTE: THIS WILL CREATE THE VIRTUAL DOM OBJECT BUT NOT MOUNT THE DOM

//If we not given IDs, we would probably manually add them.
// imageList.forEach(function(img, idx){
//    img.id = idx;
// });

class App extends Component {

    constructor(){
        super();
        this.state = {
            showTimer: true
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState( {showTimer: false} );
        }, 5000);
    }

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
                <h2>
                    Ziad's imagecaption
                </h2>
                <DoesNotNeedToBeSameClassName source="http://placekitten.com/g/210/210" text="Ziad's Kitten"/>
                <hr/>
                <h2>Ziads RedBox</h2>
                <RedBoxZiad text="Hello World!11!!">
                    <ul>
                        <li> HELLO WORLD! </li>
                        <li> PROPS CHILDREN RULE!11! </li>
                    </ul>
                </RedBoxZiad>
                <hr/>
                <h2>RedBox</h2>
                <RedBox>
                    <p>This will be in the red box</p>
                    <img alt="This too!" src="http://placekitten.com/g/200/200"/>
                </RedBox>
                <hr/>
                <h2>
                    Ziad's Guess Number
                </h2>
                <GuessTheNumberZiad/>
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
                <h2>Ziad's You clicked</h2>
                <YouClickedZiad/>
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
                <h2>Spacestation FETCH</h2>
                <SpaceStation/>
                <hr/>
                <h2>Timer</h2>
                {this.state.showTimer ? <Timer/> : null}
                <hr/>
                <h2>Ziad Input Example</h2>
                <RedBox>
                    <MyInput/>
                </RedBox>
                <hr/>
                <h2>Github API</h2>
                <GithubProfile username="denysdovhan"/>
                <hr/>
                <h2>Github Search</h2>
                <GithubSearch/>
                <hr/>
                <h2>Github Profile Ziad</h2>
                <GithubProfileZiad username="denysdovhan"/>
            </div>
        );
    }
}

export default App;
