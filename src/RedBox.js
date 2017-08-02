import React from 'react';

/* How this will be used
<RedBox>
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200"/>
</RedBox
*/


class RedBox extends React.Component {
  render() {
    return (
      <div className="red-box">
        {this.props.children}
      </div>
    );
  }
}

export default RedBox;

/* This is will be the output
<div class="red-box">
  <p>This will be in the red box</p>
  <img alt="This too!" src="http://placekitten.com/g/200/200">
</div>
*/
