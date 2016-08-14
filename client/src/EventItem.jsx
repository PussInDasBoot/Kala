import React, {Component} from 'react';
import moment from 'moment';

var EventItem = React.createClass({
  convertedEvent: function (event){
    event.start_time = moment(event.start_time, 'h:mm a').format('h:mm a');
    event.end_time = moment(event.end_time, 'h:mm a').format('h:mm a');
    return event;
  },
  render() {
    var start_time = moment(this.props.event.start_time, 'h:mm a');
    var end_time = moment(this.props.event.end_time, 'h:mm a');
    var duration = end_time.diff(start_time, 'hours');

    var style = {
      height: duration * 30
    };
    var event = [];
    var convertedEvent = this.convertedEvent(this.props.event);
      if(this.props.event.summary == "Free Time") {
        event.push ((
          <div className="free-time" style={style}>
            <p><small><strong>{convertedEvent.start_time}-{this.props.event.end_time}</strong></small><br/>
              {this.props.event.summary}</p>
          </div>
          ))
      } else {
          event.push ((
            <div className="yoga-class" style={style}>
              <p><small><strong>{this.props.event.start_time}-{this.props.event.end_time}</strong></small><br/>
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
