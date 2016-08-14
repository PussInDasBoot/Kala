import React, {Component} from 'react';
import EventItem from './EventItem.jsx';
import moment from 'moment';

var Day = React.createClass({
  timeDateConverter: function (google_events){
    var event_data = []
    google_events.forEach(function(event) {
      var newObject = {summary: "", start_time: "", end_time: ""};
      newObject.summary = event.summary;
      newObject.start_time = moment(event.start).format('HH:mm');
      newObject.end_time = moment(event.end).format('HH:mm');
      event_data.push(newObject);
    })
    return event_data
  },
  freeEventsFinder: function (event_data) {
    //function to filter events for a certain time slot
    var schedule = [];
    var start_time = '6:00 am';
    var end_time = '21:00 pm';
    for(var i=0, l=event_data.length; i<l; i++){
        end_time = event_data[i].start_time;
        
        if(i)
            start_time = event_data[i-1].end_time;   
        
        if((end_time && !i) || (end_time && i && event_data[i-1].end_time < event_data[i].start_time))
            schedule.push({summary: 'Free Time', start_time: start_time, end_time: end_time});
                
        schedule.push(event_data[i]);
        
        if(i+1 === l){
            start_time = event_data[i].end_time;
            
            if(start_time)
                schedule.push({summary: 'Free Time', start_time: start_time, end_time: '21:00 pm'});
        }
    }
    return schedule;
  },
  
  render() {
    var convertedTimes = this.timeDateConverter(this.props.eventsByDay);
    var freeEvents = this.freeEventsFinder(convertedTimes);
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