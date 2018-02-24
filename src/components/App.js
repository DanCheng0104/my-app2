import React, { Component } from 'react';
// import logo from '../logo.svg';
import PanelContent from './PanelContent';
import Map from './Map';
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
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
    return (
      <div>
        <Map map={this.state.map} layer={this.state.layer}/>
        <PanelContent/>
      </div>
      
    );
  }
}

export default App;
