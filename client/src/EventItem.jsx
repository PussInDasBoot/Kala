import React, {Component} from 'react';
import moment from 'moment';
import AvailableClasses from './AvailableClasses.jsx';

var nextModalId = 0;

var EventItem = React.createClass({
  onModalLinkClick: function (event){
    event.preventDefault();
    var modalIDSelector = $(event.currentTarget).attr('href');
    $(modalIDSelector).openModal();
  },

  yogaClasses: function (yogaClasses, event) {
    var fits = [];
    if(this.props.event.summary == "Free Time") {
      yogaClasses.forEach(function(yogaclass){
        if ((moment(yogaclass.start_time).format('HH:mm') > moment(event.start).format('HH:mm')) && (moment(yogaclass.end_time).format('HH:mm') < moment(event.end).format('HH:mm'))) {
          fits.push(yogaclass);
        }
      })
    }
    return fits;
  },
  render() {
    var yoga_classes = this.yogaClasses(this.props.yogaClasses, this.props.event);
    var start_time = moment(moment(this.props.event.start).format('HH:mm'), 'HH:mm')
    var end_time = moment(moment(this.props.event.end).format('HH:mm'), 'HH:mm')
    var duration = end_time.diff(start_time, 'minutes');

    var style = {
      height: duration/1.25
    };
    var event = [];
    var starttime = moment(this.props.event.start).format("h:mm a");
    var endtime = moment(this.props.event.end).format("h:mm a");
      if(this.props.event.summary == "Free Time" && yoga_classes.length > 0) {
        var ModalID = "ModalID"+nextModalId++
        event.push((
          <div>
            <a href={"#"+ModalID} onClick={this.onModalLinkClick}>
              <div className="free-time event-item" style={style}>
                <p><small className="event-time available-time">{starttime}-{endtime}</small></p>
                <p className="explore-available">Click to explore.</p>
                <h6 className="num-available">{yoga_classes.length} Available</h6> 
              </div>
            </a>
            <AvailableClasses modalid={ModalID} yoga_classes={yoga_classes} />
          </div>
          ))
      } 
      else if (this.props.event.summary == "Free Time" && yoga_classes.length == 0) {
        event.push ((
          <div className="free-time-empty event-item" style={style}>
            <p><small className="event-time">{starttime}-{endtime}</small><br/>
              {this.props.event.summary}</p>
          </div>
          ))
      } else {
          event.push ((
            <div className="google-event event-item" style={style}>
              <p><small className="event-time">{starttime}-{endtime}</small><br/>
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
