import React, {Component} from 'react';
import moment from 'moment';
import Show from './Show.jsx';


var AvailableClasses = React.createClass({
  getInitialState: function () {
      return {class: [], studio: [], clicked: false}
    },
    // Figuring out how to get the click event to pop to top of modal instead of backing page
  handleClick: function (id, event) {
    this.modalContainer.scrollTop = 0;
    event.preventDefault();
    $.get("http://localhost:3001/yoga_classes/"+id)
    .done(function(data) {
      this.setState({class: data[0], studio: data[1], clicked: true})
      console.log("data", data);
    }.bind(this));
  },
  render() {

    var me = this;
    return (
      <div ref={(el) => {this.modalContainer = el}} id={this.props.modalid} className="modal">
        <div className="modal-content"><span className="modal-date">{moment(this.props.yoga_classes[0].start_time).format("ddd MM/DD")}</span>
            <div className="row">
              <div className="col s5 modal-col">
                {this.props.yoga_classes.map(function(yogaclass){
                return ( 
                  <div className="event-item mindbody-event">
                    <p className="event-time-modal">{moment(yogaclass.start_time).format('h:mm a')} - {moment(yogaclass.end_time).format('h:mm a')}</p>
                    <p className="yoga-class-name">{yogaclass.name}</p>
                    <a className="mindbody-event-link"href="#" onClick={me.handleClick.bind(this, yogaclass.id)} key={yogaclass.id}>See more information</a>
                  </div>
                )
                })}
              </div>
              <div className="col s7 modal-col">
                <span style={{visibility: this.state.clicked ? "visible" : "hidden"}}>
                <Show classinfo={this.state.class} studio={this.state.studio} modalid={this.props.modalid} onAddClass={this.props.onAddClass}/>
                </span>
              </div>
            </div>  
            <div className="modal-footer">
              <a id="modal-close-text" href="#!" className="modal-action waves-effect waves-green btn-flat modal-close">Close</a>
            </div>
        </div>
      </div>
    )
  }
})
export default AvailableClasses;