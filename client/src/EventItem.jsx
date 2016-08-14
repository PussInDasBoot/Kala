import React, {Component} from 'react';
import moment from 'moment';

var EventItem = React.createClass({
  render() {
    var start_time = moment(moment(this.props.event.start).format('HH:mm'), 'HH:mm')
    var end_time = moment(moment(this.props.event.end).format('HH:mm'), 'HH:mm')
    var duration = end_time.diff(start_time, 'minutes');

    var style = {
      height: duration
    };
    var event = [];
    var starttime = moment(this.props.event.start).format("h:mm a");
    var endtime = moment(this.props.event.end).format("h:mm a");
      if(this.props.event.summary == "Free Time") {
        event.push ((
          <div className="free-time" style={style}>
            <p><small><strong>{starttime}-{endtime}</strong></small><br/>
              {this.props.event.summary}</p>
          </div>
          ))
      } else {
          event.push ((
            <div className="yoga-class" style={style}>
              <p><small><strong>{starttime}-{endtime}</strong></small><br/>
              {this.props.event.summary}</p>
            </div>
            ))
        }
    return (
      <div className="event">
        {event}
      </div>
      
    );
  }
})
export default EventItem;
