import React, {Component} from 'react';
import moment from 'moment';


var AvailableClasses = React.createClass({
  getInitialState: function () {
      return {class: []}
    },
    // Figuring out how to add the handle click event to the a tag
  handleClick: function (props) {
    $.get("http://localhost:3001/yoga_classes/"+props.id)
    .done(function(data) {
      this.setState({class: data})
    }.bind(this));
  },
  render() {
    console.log(this.props.yoga_classes)
    return (
      <div id={this.props.modalid} className="modal">
        <div className="modal-content">
            <div className="row">
              <div className="col s6">
                {this.props.yoga_classes.map(function(yogaclass){
                return ( 
                  <div className="row">
                    <div className="col s12 m12">
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">{yogaclass.name}</span>
                          <p>{moment(yogaclass.start_time).format('h:mm a')} - {moment(yogaclass.end_time).format('h:mm a')}</p>
                        </div>
                        <div className="card-action">
                          <a href="#" key={yogaclass.id}>See more information</a>
                        </div>
                      </div>
                    </div>
                  </div>)
                })}
              </div>
              <div className="col s6">Another column</div>
            </div>

          
          
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
        </div>
      </div>
    )
  }
})
export default AvailableClasses;