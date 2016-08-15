import React, {Component} from 'react';
import EventItem from './EventItem.jsx';
import moment from 'moment';

var Day = React.createClass({
  freeEventsFinder: function (event_data) {
    var schedule = [];
    
    for(var i=0, l=event_data.length; i<l; i++){
      var startOfDay = moment(event_data[i].start).startOf('day');
      var sixAM = startOfDay.add(6, 'hours');
      var start = moment(sixAM).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
      var endOfDay = moment(event_data[i].start).endOf('day');
      var ninePM = endOfDay.subtract(3, 'hours').add(1, 'minute');
      var convertedNinePM = moment(ninePM).format('YYYY-MM-DDTHH:mm:ss.SSSSZ');
      var end = event_data[i].start;
        
      if(i)
          start = event_data[i-1].end;   
      
      if((end && !i) || (end && i && moment(event_data[i-1].end).format('HH:mm') < moment(event_data[i].start).format('HH:mm')))
          schedule.push({summary: 'Free Time', start: start, end: end});
              
      schedule.push(event_data[i]);
      
      if(i+1 === l){
          start = event_data[i].end;
          
          if(start)
              schedule.push({summary: 'Free Time', start: start, end: convertedNinePM});
      }
    }
    return schedule;

  },
  
  render() {
    var yogaClasses = this.props.yogaClasses;
    // console.log("dayYogaClasses", this.props.yogaClasses);
    var freeEvents = this.freeEventsFinder(this.props.eventsByDay);
    return (
        <div>
          <p className="weekday">
          {freeEvents.map(function(event){
            return <EventItem event={event} yogaClasses={yogaClasses} />
          })}</p>
          
      </div>
    );
  }
})

export default Day;