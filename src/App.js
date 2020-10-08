import React, { Component } from 'react';
import './App.scss';
import HuaWeiProduct from './components/HuaWeiProduct';
import IPhoneProduct from './components/IPhoneProduct';
import Store from './components/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Store />
        <IPhoneProduct />
        <HuaWeiProduct />
      </main>
    );
  }
}

export default App;
