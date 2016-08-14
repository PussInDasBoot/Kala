import React, {Component} from 'react';
import moment from 'moment';

var EventItem = React.createClass({
  render() {
    var start = moment(this.props.event.start);
    var end = moment(this.props.event.end);
    var duration = end.diff(start, 'minutes');
    console.log(duration);

    var style = {
      height: duration
    };
    var event = [];
    var starttime = moment(this.props.event.start, 'h:mm a').format("h:mm a");
    var endtime = moment(this.props.event.end, 'h:mm a').format("h:mm a");
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
      // TODO: render differently if it's a free time event
      <div className="event">
        {event}
      </div>
      
    );
  }
})
export default EventItem;
