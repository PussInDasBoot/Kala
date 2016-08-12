import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';

var Day = React.createClass({
  events: function () {
    //function to filter events for a certain time slot
  },
  render() {
    return (
      // loop for however many time slots we decide for a day
        <div>
          <p className="weekday">{this.props.eventsByDay.map(function(event){
            return (<span>{event.start.date_time}</span>)
          })}</p>
          <EventItem events={this.events()}/>
      </div>
    );
  }
})

export default Day;