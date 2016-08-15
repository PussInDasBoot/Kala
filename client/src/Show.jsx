import React, {Component} from 'react';
import moment from 'moment';


var Show = React.createClass({
  // Don't show if modal ID changes?
  render() {
    console.log(this.props.studio.rating);
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
            </div>
          </div>
        </div>
      </div>
    )
  }
})
export default Show;