import React, {Component} from 'react';
import moment from 'moment';


var Show = React.createClass({
  handleClick: function (id, event) {
    // event.preventDefault();
    $.get("http://localhost:3001/add_class_to_calendar/"+id)
    .done(function(data) {
      
    }.bind(this));
  },
  render() {
    var me = this;
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.classinfo.name}</span>
              <p>{this.props.studio.name}</p>
              <p>{this.props.studio.address}</p>
              <p>{this.props.studio.location}</p>
              {this.props.studio.rating &&
              <p>Google+ rating: {this.props.studio.rating}</p>
              }
              <p>Instructor: {this.props.classinfo.instructor_name}</p>
              <p>Drop in price: ${this.props.studio.drop_in_price}</p>
              <p>Average per class price for passes: ${this.props.studio.pass_average}</p>
              <p>Average per class price for memberships: ${this.props.studio.membership_average}</p>
              <a class="waves-effect waves-teal btn-flat" onClick={me.handleClick.bind(this, this.props.classinfo.id)}>Add to calendar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
export default Show;