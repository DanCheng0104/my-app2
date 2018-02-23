import ReactMapboxGl,{Layer,Source} from "react-mapbox-gl";
import React, { Component } from 'react';
import { token } from '../config.json'

class Map extends Component {
  constructor(){
    super();   
    this.state = {
      layer : {
        filter: ["all",['==','YEAR',2011],['==','ID','neighborhoods_291']]
      }
    } 
  }


  render() {
    const Map = ReactMapboxGl({
        accessToken: token,
        minZoom:8,
        maxZoom:15
    });
    
    const VECTOR_SOURCE_OPTIONS = {
      "type":"vector",
      "url": "mapbox://dcheng0104.9ehsg54h"
      
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
          <Layer type="fill" id="layer_id" sourceId={"nb"}  sourceLayer='water_usage_bld_2_neighborhoo-dp4txq' paint={PAINT_OPTIONS} filter={this.state.layer.filter}/>
        </Map>
    );
  }
}

export default Map;
