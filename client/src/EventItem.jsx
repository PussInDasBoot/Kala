import React, {Component} from 'react';

var EventItem = React.createClass({
  render() {
    var event = [];
      if(this.props.event.summary == "Free Time") {
        event.push ((
          <div className="free-time">
            <span class="new badge" data-badge-caption="yoga classes available at this time">4</span>
          </div>
          ))
      } else {
          event.push ((
            <div className="google-event">
              <span class="new badge" data-badge-caption="yoga classes available at this time">4</span>
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
