import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {React.createElement(
               'p',
               { className: 'App-intro' },
                                                                                                                                                                                                                                                                                                                                                'To get started, edit ',
                React.createElement('code', null, 'src/App.js'),
                ' and save to reload.'
        )}

      </div>
    );
  }
}

export default App;
