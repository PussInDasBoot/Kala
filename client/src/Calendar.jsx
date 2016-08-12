import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';
import EventItem from './EventItem.jsx';
var _ = require('lodash');
var moment = require('moment');

class Calendar extends Component {
  
  componentDidMount() {
    console.log("componentDidMount App");
    var sundayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-14");
    });
    this.setState({sundayEvents: sundayEvents});
    var mondayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-15");
    });
    this.setState({mondayEvents: mondayEvents});
    var tuesdayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-16");
    });
    this.setState({tuesdayEvents: tuesdayEvents});
    var wednesdayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-17");
    });
    this.setState({wednesdayEvents: wednesdayEvents});
    var thursdayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-18");
    });
    console.log(thursdayEvents)
    this.setState({thursdayEvents: thursdayEvents});
    var fridayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-19");
    });
    this.setState({fridayEvents: fridayEvents});
    var saturdayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-20");
    });
    this.setState({saturdayEvents: saturdayEvents});

  }
  render() {
    {this.state &&
      console.log(this.props.google_events)
    }

    return (
      <div>
        <div className="row-7">
          <div className="col">
            <p className="weekday">Sun 8/14</p>
              { this.state && this.state.sundayEvent &&
                  this.state.sundayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>
          <div className="col">
            <p className="weekday">Mon 8/15</p>
            { this.state && this.state.mondayEvents &&
                this.state.mondayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
              }
          </div>
          <div className="col">
            <p className="weekday">Tue 8/16</p>
            { this.state && this.state.tuesdayEvents &&
                  this.state.tuesdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>
          <div className="col">
            <p className="weekday">Wed 8/17</p>
            { this.state && this.state.wednesdayEvents &&
                  this.state.wednesdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>
          <div className="col">
            <p className="weekday">Thu 8/18</p>
            { this.state && this.state.thurdayEvents &&
                  this.state.thurdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>
          <div className="col">
            <p className="weekday">Fri 8/19</p>
            { this.state && this.state.fridayEvents &&
                  this.state.fridayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>

          <div className="col">
            <p className="weekday">Sat 8/20</p>
            { this.state &&this.state.saturdayEvents &&
                  this.state.saturdayEvents.map(function(event){ return <EventItem key={event.id} user_event={event} />})
                }
          </div>
      </div>

      <ul>
        { this.props.google_events.map(function(event) {
          var start_time = moment(moment(event.start.date_time).format('HH:mm'), 'HH:mm');
          var end_time = moment(moment(event.end.date_time).format('HH:mm'), 'HH:mm');
          var duration = end_time.diff(start_time, 'hours');
          console.log(duration);

          var style = {
          height: duration * 50
          };
          return (<div className="free-time" style={style}><p>{event.summary}Free Time</p></div>);
        })}
      </ul>
    </div>
    );
  }
};
export default Calendar;