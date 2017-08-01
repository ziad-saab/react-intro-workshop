import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <nav className="main-nav">
                    <ul style={ulStyle}>
                      <li><a href="/">Home</a></li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    Copywhat 2016 Kittens
                </footer>
            </div>
        );
    }
}

var ulStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0
};

export default Layout;