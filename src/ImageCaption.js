import React from 'react';


/*This is how ImageCaption will be called
Where the atrributes (key,source,text) can be accessed via the this.props. 
<ImageCaption key=1 source="http://placekitten.com/g/210/210" text="This is a kittenz!"/>
*/

class ImageCaption extends React.Component {
  render() {
    return (
      <figure>
        <img src={this.props.src} alt="test"/>
        <figcaption> {this.props.text} </figcaption>
      </figure>
    );
  }
}

export default ImageCaption;