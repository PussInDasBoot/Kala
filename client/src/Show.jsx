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
              <p className="studio"><strong>{this.props.studio.name}</strong>
              <span className="instructor">{this.props.classinfo.instructor_name}</span>
              </p>
              <p className="card-title">{this.props.classinfo.name}</p>
        
              <ul className="collection">
                <li className="collection-item">Drop In: &nbsp;<span className="price">${this.props.studio.drop_in_price} / class</span></li>
                <li className="collection-item">Pass Average: &nbsp;<span className="price">${this.props.studio.pass_average} / class</span></li>
                <li className="collection-item">Membership Average: &nbsp;<span className="price">${this.props.studio.membership_average} / class</span></li>
              </ul>
              
              <p>{this.props.studio.address}</p>

              <div className="chip-placeholder">
              {this.props.studio.rating &&
              <div className="chip"> 
                <p className="rating">Google+ Rating {this.props.studio.rating}</p>
              </div>
              } 
              </div>
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