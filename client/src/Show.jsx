import React, {Component} from 'react';
import moment from 'moment';


var Show = React.createClass({
  handleClick: function (id, event) {
    event.preventDefault();
    $.get("http://localhost:3001/add_class_to_calendar/"+id)
    .done(function(data) {
    }.bind(this));
    
  },
  render() {
    var me = this;
    return (
      <div className="row">
        <div className="col s12 m12 module-col">
          <div className="card">
            <div className="card-content">
              <p className="studio"><strong>{this.props.studio.name}</strong>
              <span className="instructor">{this.props.classinfo.instructor_name}</span>
              </p>
              <p className="card-time">{moment(this.props.classinfo.start_time).format('h:mm a')} - {moment(this.props.classinfo.end_time).format('h:mm a')} </p>
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
              <a href="#" onClick={me.handleClick.bind(this, this.props.classinfo.id)}>Copy to my google calendar</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
export default Show;