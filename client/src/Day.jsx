import React, {Component} from 'react';
import EventItem from './EventItem.jsx';
import moment from 'moment';

var Day = React.createClass({
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
    console.log(schedule)
  },
  
  render() {
    var freeEvents = this.freeEventsFinder(this.props.eventsByDay);
    console.log("free events", freeEvents);
    { this.props.eventsByDay[0] &&
      console.log(this.props.eventsByDay[0].start);
    }
    return (
      // loop for however many time slots we decide for a day

        <div>
          <p className="weekday">{this.props.eventsByDay.map(function(event){
            return (<span>{event.summary}</span>)
          })}</p>
          
      </div>
    );
  }
})

export default Day;

// <EventItem events={this.events()}/>

// splitByDay: function (allevents) {
//     var splitByDayEvents = []
//     allevents.forEach(function(event){
//       var weekdayNumber = moment(event.start).isoWeekday();
//       if (!splitByDayEvents[weekdayNumber]) {
//         splitByDayEvents[weekdayNumber] = []
//       };
//       splitByDayEvents[weekdayNumber].push(event);
//     });
//     return splitByDayEvents
//   },