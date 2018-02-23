import ReactMapboxGl,{Layer,Source} from "react-mapbox-gl";
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
    
    const VECTOR_SOURCE_OPTIONS = {
      "type":"vector",
      "url": "mapbox://dcheng0104.cyb89w7a"
      
    }

    const PAINT_OPTIONS = {
      "fill-outline-color": "#00ffff",
      "fill-color":'red'
    }

    return (
        <Map style="mapbox://styles/mapbox/streets-v8" center={this.props.mapProps.center} zoom={this.props.mapProps.zoom} containerStyle={{
            height: "100vh",
            width: "100vw"
          }} >
          <Source id="nb" tileJsonSource={VECTOR_SOURCE_OPTIONS} />
          <Layer type="fill" id="layer_id" sourceId={"nb"}  sourceLayer='usage_nbgeojson' paint={PAINT_OPTIONS} filter={this.props.layerProps.filter} />
        </Map>
    );
  }
}

export default Map;
