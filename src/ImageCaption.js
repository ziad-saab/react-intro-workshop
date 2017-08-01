import React from 'react';

class ImageCaption extends React.Component {
  constructor(props) {
    super();

  }
  render() {
    return (
      <figure key = {this.props.id}>
        <img src = {this.props.source} alt={this.props.text} />
        <figcaption>{this.props.text}</figcaption>
      </figure>
    );
  }
}

export default ImageCaption;