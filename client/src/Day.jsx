import React, {Component} from 'react';
import EventItem from './EventItem.jsx'

var Day = React.createClass({
  events: function () {
    //function to filter events for a certain time slot
  },
  render() {
    return (
      // loop for however many time slots we decide for a day
        <div>
          <p className="weekday">{this.props.eventsByDay.map(function(event){
            return (<span>{event.summary}</span>)
          })}</p>
          <EventItem events={this.events()}/>
      </div>
    );
  }
})

export default Day;