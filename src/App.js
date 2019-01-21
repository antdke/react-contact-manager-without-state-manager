import React, { Component } from 'react';

// components
import Contacts from './components/Contacts';
import Header from './components/Header';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// App.js is the "meeting place" for all components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
