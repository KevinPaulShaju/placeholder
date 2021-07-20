import React, { useState } from "react";
import { Marker } from "react-map-gl";
import "./Map.css";
import ReactMapGL from "react-map-gl";

const Map = (props) => {
  const [viewPort, setViewPort] = useState({
    ...props.coordinates,
    zoom: 10,
    width: "100%",
    height: "100%",
    bearing: 0,
    pitch: 50,
  });

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewPort}
        onViewportChange={setViewPort}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia2V2aW5zaGFqdSIsImEiOiJja3BrdzVqOHUxYXVqMnZvOHF1bXg4eXl4In0.pRSKbyjUWcu6MHI_0Ld9wQ"
        }
      >
        <Marker
          latitude={props.coordinates.latitude}
          longitude={props.coordinates.longitude}
          
          offsetTop={-10}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
            alt="you are here" width ={50} height ={50}
          />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
