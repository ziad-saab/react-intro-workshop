import React from 'react';

class RedBox extends React.Component {
    render () {
        return (
            <div className="red-box">
                {this.props.children}
            </div>
        );
    }
}

export default RedBox;