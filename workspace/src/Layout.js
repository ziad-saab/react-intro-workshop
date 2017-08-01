import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <nav className="main-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
                <footer>
                    Copyright 2016 Kittens
                </footer>
            </div>
        );
    }
}

export default Layout;