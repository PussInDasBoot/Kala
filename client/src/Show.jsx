import React, {Component} from 'react';
import moment from 'moment';


var Show = React.createClass({
  // Don't show if modal ID changes?
  render() {
    console.log(this.props.studio.rating);
    return (
      <div className="row">
        <div className="col s12 m12 module-col">
          <div className="card">
            <div className="card-content">
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
            </div>
            <div className="card-action">
              <a href="#">Copy to my google calendar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
export default Show;