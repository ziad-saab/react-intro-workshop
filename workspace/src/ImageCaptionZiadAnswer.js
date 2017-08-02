import React from 'react';

class ImageCaptionZiad extends React.Component {
    render() {
        return (
            <figure>
                <img src={this.props.source} alt="hardcodedAltImage"/>
                <figcaption>
                    {this.props.text}
                </figcaption>
            </figure>
        );
    }
}

export default ImageCaptionZiad;