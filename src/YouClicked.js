import React from 'react';

/* How this will be used
<RedBox>
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200"/>
</RedBox
*/

class YouClicked extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
      timesReset: 0
    };
    
    /*NTS: Binding*/
    /*need to use .bind(this)*/
    this._handleButtonClick = this._handleButtonClick.bind(this);
    this._handleButtonReset = this._handleButtonReset.bind(this); 
  }
  
  _handleButtonClick(){
    //NTS: USING this.state
    //need to use this.state over here
    //this.setState part of react to change props of state in constructor
    this.setState({timesClicked: this.state.timesClicked+1});
  } 
  
  _handleButtonReset(){
    this.setState({timesClicked: 0, timesReset: this.state.timesReset+1});
  }
  
  render() {
    return (
      <div className="you-clicked">
        <p>You clicked {(this.state.timesClicked)} times</p>
        <button type="button" onClick={this._handleButtonClick}>CLICK ME!</button>
        <button type="button" onClick={this._handleButtonReset}>RESET!</button>
      </div>
    );
  }
}

/*Add a method constructor to your YouClicked component. In it, call super() and then assign this.state an object 
with a single key timesClicked with the value 0. Then, in your render method, add a {this.state.timesClicked} 
somewhere to see the output. It should say 0 if you preview it in the browser.

Add an onClick event handler to the button of your component. This should call a method of your component called 
_handleButtonClick. In this method, you should use this.setState to change the state of your component. 
The reason why you call this.setState instead of simply re-assigning with this.state.
timesClicked++ has to do with hw React detects that it has to render your component.
Here, what you want to do in your event handler is:*/

export default YouClicked;