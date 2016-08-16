import React, {Component} from 'react';
import moment from 'moment';

var CalendarHeader = React.createClass({
  render() {
  var currentDate = moment().format("ddd MM/DD");
  var dayTwo = moment().add(1,'day').format("ddd MM/DD");
  var dayThree = moment().add(2,'day').format("ddd MM/DD");
  var dayFour = moment().add(3,'day').format("ddd MM/DD");
  var dayFive = moment().add(4,'day').format("ddd MM/DD");
  var daySix = moment().add(5,'day').format("ddd MM/DD");
  var daySeven = moment().add(6,'day').format("ddd MM/DD");

    return (
      <div className="calendar-header row-7">
        <div className="col">
          <p className="weekday-title">{currentDate}</p>
        </div>  

        <div className="col">
          <p className="weekday-title">{dayTwo}</p>
        </div>

        <div className="col">
          <p className="weekday-title">{dayThree}</p>
        </div> 

        <div className="col">
          <p className="weekday-title">{dayFour}</p>
        </div> 

        <div className="col">
          <p className="weekday-title">{dayFive}</p>
        </div> 

        <div className="col">
          <p className="weekday-title">{daySix}</p>
        </div> 

        <div className="col">
          <p className="weekday-title">{daySeven}</p>
        </div> 

      </div>
    );
  }
});

export default CalendarHeader;