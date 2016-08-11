import React, {Component} from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";




var SimpleMap = React.createClass({
  render() {
    return (
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={3}
              defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            />
          }
        />
      </section>
    );
  }
});

export default SimpleMap;