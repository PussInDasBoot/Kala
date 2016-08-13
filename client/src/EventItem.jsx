import React, {Component} from 'react';

class EventItem extends Component {
  render() {
    return (
      // TODO: render differently if it's a free time event

      <div className="yoga-class">
        <p><small><strong>{this.props.event.start_time}-{this.props.event.end_time}</strong></small><br/>
        {this.props.event.summary}</p>
      </div>
    );
  }
}
export default EventItem;
