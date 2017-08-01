import React, {Component} from 'react';

class RedBoxZiad extends Component {
    render() {
        return (
            <div style={{border: '5px solid red', padding: 10}}>
                {this.props.children}
            </div>
        );
    }
}

export default RedBoxZiad;