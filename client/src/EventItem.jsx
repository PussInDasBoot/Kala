import React, {Component} from 'react';
var moment = require('moment');


class EventItem extends Component {
  render() {
  var test = this.props.user_event.start.date_time;
  var momentTest = moment(test).format('ha');
  console.log(momentTest);

  var start_time = moment(moment(this.props.user_event.start.date_time).format('HH:mm'), 'HH:mm');
  var end_time = moment(moment(this.props.user_event.end.date_time).format('HH:mm'), 'HH:mm');
  var duration = end_time.diff(start_time, 'hours');
  console.log(duration);

  var style = {
    height: duration * 50
  };

    return (

      <div className="yoga-class" style={style}>
        <p><small><strong>{moment(this.props.user_event.start.date_time).format('ha')}-{moment(this.props.user_event.end.date_time).format('ha')}</strong></small><br/>
        {this.props.user_event.summary}</p>
      </div>
    );
  }
}
export default EventItem;
