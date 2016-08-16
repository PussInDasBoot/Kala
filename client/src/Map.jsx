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
              defaultZoom={12}
              defaultCenter={{ lat: 49.270974, lng: -123.139169 }}
              >
              { this.props.studios.map(function(studio) {
                return <Marker key={studio.id} studio={studio}
                position={{ lat: studio.lat, lng: studio.lng }}
                studioid={{ studioid: studio.id }}
                title={studio.name} />
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
});

export default SimpleMap;