import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Map from './Map';

class App extends Component {
  constructor(){
    super();
    this.state ={
      map:{
        center:[ -118.382877, 34.284700],
        zoom: [9]
      }
    };
  }
  render() {
    return (
      <Map mapProps={this.state.map}/>
    );
  }
}

export default App;
