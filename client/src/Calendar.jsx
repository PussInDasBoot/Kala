import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';
// import EventItem from './EventItem.jsx';
var _ = require('lodash');
var moment = require('moment');

class Calendar extends Component {
  
  componentDidMount() {
  var event_data = [{
    summary: "Fake Work",
    start_time: moment("2016-08-11T07:00:00.000-07:00").format('h:mm a'),
    end_time: moment("2016-08-11T11:00:00.000-07:00").format('h:mm a')
},
{
    summary: "Fake Work",
    start_time: moment("2016-08-11T16:00:00.000-07:00").format('h:mm a'),
    end_time: moment("2016-08-11T12:00:00.000-07:00").format('h:mm a')
}];

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

console.log(schedule);


    // console.log("componentDidMount App");
    // var sundayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-14");
    // });
    // this.setState({sundayEvents: sundayEvents});
    // var mondayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-15");
    // });
    // this.setState({mondayEvents: mondayEvents});
    // var tuesdayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-16");
    // });
    // this.setState({tuesdayEvents: tuesdayEvents});
    // var wednesdayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-17");
    // });
    // this.setState({wednesdayEvents: wednesdayEvents});
    // var thursdayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-18");
    // });
    // this.setState({thursdayEvents: thursdayEvents});
    // var fridayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-19");
    // });
    // this.setState({fridayEvents: fridayEvents});
    // var saturdayEvents = this.props.google_events.filter(function (event) {
    //   return event.start.date_time.includes("2016-08-20");
    // });
    // this.setState({saturdayEvents: saturdayEvents});

  }

  render() {

    return (
      // <div>
      //   <div className="row-7">
      //     <div className="col">
      //       <p className="weekday">Sun 8/14</p>
      //         { this.state && this.state.sundayEvent &&
      //             this.state.sundayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>
      //     <div className="col">
      //       <p className="weekday">Mon 8/15</p>
      //       { this.state && this.state.mondayEvents &&
      //           this.state.mondayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //         }
      //     </div>
      //     <div className="col">
      //       <p className="weekday">Tue 8/16</p>
      //       { this.state && this.state.tuesdayEvents &&
      //             this.state.tuesdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>
      //     <div className="col">
      //       <p className="weekday">Wed 8/17</p>
      //       { this.state && this.state.wednesdayEvents &&
      //             this.state.wednesdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>
      //     <div className="col">
      //       <p className="weekday">Thu 8/18</p>
      //       { this.state && this.state.thurdayEvents &&
      //             this.state.thurdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>
      //     <div className="col">
      //       <p className="weekday">Fri 8/19</p>
      //       { this.state && this.state.fridayEvents &&
      //             this.state.fridayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>

      //     <div className="col">
      //       <p className="weekday">Sat 8/20</p>
      //       { this.state &&this.state.saturdayEvents &&
      //             this.state.saturdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
      //           }
      //     </div>
      // </div>
    <div>
      <ul>
        <p>"yo"</p>
      </ul>
    </div>
    );
  }
};
export default Calendar;