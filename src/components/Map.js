import ReactMapboxGl,{Layer,Feature} from "react-mapbox-gl";
import React, { Component } from 'react';
import { token } from '../config.json'

class Map extends Component {
  constructor(){
    super();
    

  }
  render() {

    const Map = ReactMapboxGl({
        accessToken: token,
        minZoom:8,
        maxZoom:15

    });
    return (
        <Map style="mapbox://styles/mapbox/streets-v8" center={this.props.mapProps.center} containerStyle={{
            height: "100vh",
            width: "70vw"
          }} >
        </Map>
    );
  }
}

export default Map;
