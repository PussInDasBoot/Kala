import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';
import EventItem from './EventItem.jsx';


var Calendar = React.createClass({
  getInitialState: function () {
        return {hover: false};
    },

  mouseOver: function () {
      this.setState({hover: true});
  },

  mouseOut: function () {
      this.setState({hover: false});
  },
  render() {
    return (
        <div className="row-7">
          <div className="col">
            <p className="weekday">Sun 8/7</p>
            { this.props.google_events.map(function(user_event) {
              return <EventItem key={user_event.id} user_event={user_event} />
            })}
          </div>

          <div className="col">
            <p className="weekday">Mon 8/8</p>
          </div>

          <div className="col">
            <p className="weekday">Tue 8/9</p>
          </div>

          <div className="col">
            <p className="weekday">Wed 8/10</p>
          </div>

          <div className="col">
            <p className="weekday">Thu 8/11</p>
          </div>

          <div className="col">
            <p className="weekday">Fri 8/12</p>
          </div>

          <div className="col">
            <p className="weekday">Sat 8/13</p>
          </div>
      </div>
    );
  }
})
export default Calendar;