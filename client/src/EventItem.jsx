import React, {Component} from 'react';

class EventItem extends Component {
  render() {
    return (

      <div className="yoga-class">
        <p><small><strong>this.props.event.start_time</strong></small><br/>
        Class Name</p>
      </div>
    );
  }
}
export default EventItem;
