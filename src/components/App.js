import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Map from './Map';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(){
    super();
    this.state ={
      map:{
        center:[ -118.382877, 34.014700],
        zoom: [9]
      },
      layer : {
        filter: ["all",['==','YEAR',2011],['==','ID','neighborhoods_291']]
      }
    };
  }
  render() {
    return (
      <Map mapProps={this.state.map} layerProps={this.state.layer}/>
    );
  }
}

export default App;
