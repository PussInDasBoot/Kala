import React, {Component} from 'react';

class EventItem extends Component {
  render() {
  console.log(this.props.user_event)
    return (

      <div className="yoga-class">
        <p><small><strong>{this.props.user_event.start.date_time}-{this.props.user_event.end.date_time}</strong></small><br/>
        {this.props.user_event.summary}</p>
      </div>
    );
  }
}
export default EventItem;