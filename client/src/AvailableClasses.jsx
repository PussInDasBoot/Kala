import React, {Component} from 'react';
import moment from 'moment';
import Show from './Show.jsx';


var AvailableClasses = React.createClass({
  getInitialState: function () {
      return {class: [], studio: [], clicked: false}
    },
    // Figuring out how to get the click event to pop to top of modal instead of backing page
  handleClick: function (id) {
    $.get("http://localhost:3001/yoga_classes/"+id)
    .done(function(data) {
      this.setState({class: data[0], studio: data[1], clicked: true})
      console.log("data", data);
    }.bind(this));
  },
  render() {

    var me = this;
    return (
      <div id={this.props.modalid} className="modal">
        <div className="modal-content">
            <div className="row">
              <div className="col s4">
                {this.props.yoga_classes.map(function(yogaclass){
                return ( 
                  <div className="google-event event-item">
                    <p><small className="event-time">{moment(yogaclass.start_time).format('h:mm a')} - {moment(yogaclass.end_time).format('h:mm a')}</small><br/>
                    {yogaclass.name}</p>
                    <a href="#" onClick={me.handleClick.bind(this, yogaclass.id)} key={yogaclass.id}>See more information</a>
                  </div>
                )
                })}
              </div>
              <div className="col s8">
                <span style={{visibility: this.state.clicked ? "visible" : "hidden"}}>
                <Show classinfo={this.state.class} studio={this.state.studio}/>
                </span>
              </div>
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