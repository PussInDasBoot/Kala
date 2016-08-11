import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';

var Calendar = React.createClass({
  getInitialState: function () {
        return {hover: false};
    },

  mouseOver: function () {
      this.setState({hover: true});
  },

  mouseOut: function () {
      this.setState({hover: false});
  },
  render() {
    return (
      <div>
        <h1>Calendar</h1>
        <ul>
          <li><a>{this.props.classes[0].name}</a>
          </li>
        </ul>
      </div>
    );
  }
})
export default Calendar;