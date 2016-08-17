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
              defaultCenter={{ lat: 49.260352, lng: -123.132445 }}
              defaultOptions={{
                 styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"lightness":"100"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#040404"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"saturation":"83"},{"lightness":"100"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c8e6e0"},{"visibility":"on"}]}]
             }}
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