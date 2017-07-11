import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header>header</header>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
