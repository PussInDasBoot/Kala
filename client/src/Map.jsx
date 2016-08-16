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
              defaultZoom={13}
              defaultCenter={{ lat: 49.262852, lng: -123.116510 }}
              >
              { this.props.studios.map(function(studio) {
                console.log(studio.name, studio.lat, studio.lng);
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