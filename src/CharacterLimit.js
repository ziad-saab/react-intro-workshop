import React from 'react';

/* How this will be used
<RedBox>
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200"/>
</RedBox
*/


class CharacterLimit extends React.Component {
    constructor(){
        super();
        this.state = {
            inputValue : ""
        };
        
        this._handleInput = this._handleInput.bind(this);
    }
    
    
    //_handleInput takes in an event, compare with buttonClick in YouClicked
    //those did not take in event
    //Here I need access to event.target
    //This willll receive the DOM event, 
    //and you'll get one every time the value of the input field changes.
    //target is the DOM element, and value is its current value. (in this case the text inside the textbox)
    _handleInput(event){
        var value = event.target.value;
        if(event.target.value.length <= this.props.limit){
            this.setState({inputValue: value});
        }
    }
    
    render(){
        return(
            <div className='CharacterLimit'>
                <input type="text" value={this.state.inputValue} onInput={this._handleInput}/>
                <p>{this.props.limit - this.state.inputValue.length}</p>
            </div>
            )
        
    }
    
}

export default CharacterLimit;