import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../css/PanelContent.css';
import { DropdownButton, MenuItem, Panel } from 'react-bootstrap';

// <DropdownButton
// bsStyle='default'
// title='Default'
// id ='1'
// className = 'nbOption'
// >
// <MenuItem eventKey="1">Action</MenuItem>
// <MenuItem eventKey="2">Another action</MenuItem>
// <MenuItem eventKey="3" active>
//   Active Item
// </MenuItem>
// <MenuItem divider />
// <MenuItem eventKey="4">Separated link</MenuItem>
// </DropdownButton>

class App extends Component {
  constructor(){
    super();
  }
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
    return (
        <div className = "paneltest">
            <Panel>
                <Panel.Heading>Panel heading without a title</Panel.Heading>
                <Panel.Body>
                    <div>Panel content</div>
                    <div>render</div>
                    <div>render</div>
                </Panel.Body>
            </Panel>
        </div>
      
    );
  }
}

export default App;
