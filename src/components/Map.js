import ReactMapboxGl,{Layer,Feature} from "react-mapbox-gl";
import React, { Component } from 'react';
import { token } from '../config.json'

class Map extends Component {
  render() {
    const Map = ReactMapboxGl({
        accessToken: token
    });
    return (
        <Map style="mapbox://styles/mapbox/streets-v8" containerStyle={{
            height: "100vh",
            width: "70vw"
          }}>
              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15" }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
             </Layer>
        </Map>
    );
  }
}

export default Map;
