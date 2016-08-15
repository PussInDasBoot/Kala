import React, {Component} from 'react';
import moment from 'moment';


var AvailableClasses = React.createClass({
  render() {
    return (
      <div id={this.props.modalid} className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    )
  }
})
export default AvailableClasses;