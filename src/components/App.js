import React, { Component } from 'react';
// import logo from '../logo.svg';
import PanelContent from './PanelContent';
import Map from './Map';


class App extends Component {
  constructor(){
    super();
    this.updateFilter = this.updateFilter.bind(this);
    this.state ={
      map:{
        center:[ -118.382877, 34.014700],
        zoom: [9]
      },
      layer : {
        filter: ["all",['==','YEAR',2011],['==','ID','neighborhoods_291']]
      },
      
    };
  }

  updateFilter(geo){
    // const fishes = {...this.state.fishes};
		// fishes[key] = fish;
    // this.setState({fishes});
    //const oldFilter = {...this.state.filter};
    console.log(geo);
    const newFilter =  ["all",['==','YEAR',2011],['==','ID',geo]];
    this.setState({layer:newFilter});
  }
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
    return (
      <div>
        <Map map={this.state.map} layer={this.state.layer}/>
        <PanelContent updateFilter={this.updateFilter}/>
      </div>
      
    );
  }
}

export default App;
