import React, {Component} from 'react';
import {Input, Icon, Row, Col} from 'react-materialize';

var Filters = React.createClass({
  getInitialState() {
    return {commitment: ''}
  },
  handleChange(e) {
    this.setState({commitment: e.target.value}, function (){
    })
  },
  render() {
    return (
      <form action="//localhost:3001/filter" id="filter-classes">
        <strong>Commitment</strong><br/>
    
        <input id="single" name="commitment" type="radio" value="single" onClick={this.handleChange}/>
        <label for="single">Single</label>
      
       
        <input id="pass" name="commitment" type="radio" value="pass" label='Pass' onClick={this.handleChange}/>
        <label for="pass">Pass</label>
    
     
        <input id="membership" name="commitment" type="radio" value="membership" onClick={this.handleChange}/>
        <label for="membership">Membership</label>
      

        <input type="number" min="0" name="max_price" placeholder="Max Price Per Class"/><br/>

        <input type="text" placeholder="Class Name" name="class_name"/><br/>

        <select name="studio_name" form="filter-classes">
          <option value="" selected>Studio Name</option>
          <option value="Stretch">Stretch</option>
          <option value="Karma">Karma</option>
          <option value="Chopra">Chopra</option>
        </select><br/>

        <select name="rating" form="filter-classes">
          <option value="" selected>Studio Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br/>
        
        <select name="location" form="filter-classes">
          <option value="" selected>Location</option>
          <option value="Downtown Vancouver">Downtown Vancouver</option>
          <option value="Kitsilano">Kitsilano</option>
          <option value="East Vancouver">East Vancouver</option>
          <option value="Mount Pleasant">Mount Pleasant</option>
        </select><br/>

        <input type="submit" label="Submit"/>
      </form>
    );
    // Could hardcode or get from data
  }
})
export default Filters;

// { this.props.studios.map(function(studio) {
//                 return <Marker key={studio.id} studio={studio}
//                 position={{ lat: studio.lat, lng: studio.lng }}
//                 studioid={{ studioid: studio.id }} />
//               })}