import React, {Component} from 'react';
import EventItem from './EventItem.jsx';
import moment from 'moment';

var Day = React.createClass({
  freeEventsFinder: function (event_data) {
    var schedule = [];
    var start = '6:00 am';
    var end = '21:00 pm';
    for(var i=0, l=event_data.length; i<l; i++){
        end = event_data[i].start;
        
        if(i)
            start = event_data[i-1].end;   
        
        if((end && !i) || (end && i && moment(event_data[i-1].end).format('HH:mm') < moment(event_data[i].start).format('HH:mm')))
            schedule.push({summary: 'Free Time', start: start, end: end});
                
        schedule.push(event_data[i]);
        
        if(i+1 === l){
            start = event_data[i].end;
            
            if(start)
                schedule.push({summary: 'Free Time', start: start, end: '21:00 pm'});
        }
    }
    return schedule;
  },
  
  render() {
    var freeEvents = this.freeEventsFinder(this.props.eventsByDay);
    return (
        <div>
          <p className="weekday">
          {freeEvents.map(function(event){
            return <EventItem event={event} />
          })}</p>
          
      </div>
    );
  }
})

export default Day;