import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';
import EventItem from './EventItem.jsx';
var _ = require('lodash');


class Calendar extends Component {
  
  componentDidMount() {
    console.log("componentDidMount App");
    var sundayEvents = this.props.google_events.filter(function (event) {
      return event.start.date_time.includes("2016-08-17");
    });
    console.log(sundayEvents);
    this.setState({sundayEvents: sundayEvents});
  }
  render() {
    {this.state &&
      console.log(this.props.google_events)
    }
    return (
        <div className="row-7">
          <div className="col">
            <p className="weekday">Sun 8/7</p>
              { this.state &&
                  this.state.sundayEvents.map(function(event){ return <EventItem user_event={event} />})
                }
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
};
export default Calendar;