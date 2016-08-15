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
      this.setState({studios: data})
    }.bind(this)); 
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
    console.log("classes", this.state.classes);
    return (
      <div>
        <div id="filters">
          <Filters studios={this.state.studios}/>
        </div>
        <div id="map">
          <SimpleMap studios={this.state.studios}/>
        </div>
        <div id="calendar">
          <Calendar google_events={this.state.google_events} classes={this.state.classes}/>
        </div>
      </div>
    );
  }
})
export default App;