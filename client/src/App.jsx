import React, {Component} from 'react';
import Filters from './Filters.jsx';
import SimpleMap from './Map.jsx';
import Calendar from './Calendar.jsx';
import $ from 'jquery';
import reactMaterialize from 'react-materialize';

var App = React.createClass({
  getInitialState: function () {
      return {studios: [], classes: [], google_events: []}
    },

  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:3001/studios")
    .done(function(data) {
      // console.log("Got data from API: ", data);
      // set the contact list as a state property of App
      // automatically re-renders App
      this.setState({studios: data})
    }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
    $.get("http://localhost:3001/get_user_events")
    .done(function(data) {
      this.setState({google_events: data})
    }.bind(this));
    $.get("http://localhost:3001/classes_outside_busy_time")
    .done(function(data) {
      this.setState({classes: data})
    }.bind(this));
  },

  render() {
    console.log(this.state.classes);
    return (
      <div>
        <div id="filters">
          <Filters studios={this.state.studios}/>
        </div>
        <div id="map">
          <SimpleMap studios={this.state.studios}/>
        </div>
        <div id="calendar">
          <Calendar google_events={this.state.google_events}/>
        </div>
      </div>
    );
  }
})
export default App;