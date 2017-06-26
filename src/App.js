import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import {Todo} from './Todo'

class App extends Component {
  render() {
    return (
      <div>
        <div className="col-md-4">
          <Todo buttonColor="red"/>
        </div>
        <div className="col-md-4">
          <Todo buttonColor="green"/>
        </div>
        <div className="col-md-4">
          <Todo buttonColor="blue"/>
        </div>
      </div>
    );
  }
}

export default App;
