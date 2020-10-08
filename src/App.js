import React, { Component } from 'react';
import './App.scss';
import IPhoneProduct from './components/IPhoneProduct';
import Store from './components/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
        <IPhoneProduct />
      </main>
    );
  }
}

export default App;
