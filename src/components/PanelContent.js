import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../css/PanelContent.css';
import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';
import data from '../geo.json';

class App extends Component {
  constructor(){
    super();
    this.handlerChange = this.handlerChange.bind(this);
  }
  handlerChange(e,key){
      this.props.updateFilter(key);


  }
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
    const geos = data;
    const geoKeys = Object.keys(geos);
    return (
        <div className = "paneltest">
            <Panel>
                <Panel.Heading>The City Of LA Water Consumption Map</Panel.Heading>
                <Panel.Body>
                <DropdownButton
                bsStyle='default'
                title='Please choose a neighborhood below'
                id ='1'
                className = 'nbOption'
                >
                    {geoKeys.map(geoKey=><MenuItem key={geoKey} eventKey={geoKey}  onClick={(e)=>this.handlerChange(e,geoKey)}>{geos[geoKey]}</MenuItem>)}	
                </DropdownButton>
                </Panel.Body>
            </Panel>
        </div>
      
    );
  }
}

// <MenuItem eventKey="1">Action</MenuItem>
// <MenuItem eventKey="2">Another action</MenuItem>
// <MenuItem eventKey="3" active>Active Item</MenuItem>

export default App;
