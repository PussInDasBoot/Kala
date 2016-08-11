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
              defaultZoom={15}
              defaultCenter={{ lat: this.props.studios.lat, lng: this.props.studios.long }}
              >
              <Marker
                position={{ lat: this.props.studios.lat, lng: this.props.studios.long  }}
                studioid={{ studioid: this.props.studios.id }} />
            </GoogleMap>
          }
        />
      </section>
    );
  }
});

export default SimpleMap;

