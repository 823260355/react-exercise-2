import React, { Component } from 'react';
import './App.scss';
import PhoneProduct from './components/PhoneProduct';
import Store from './components/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
        <PhoneProduct />
      </main>
    );
  }
}

export default App;
