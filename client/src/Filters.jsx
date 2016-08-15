import React, {Component} from 'react';



var Filters = React.createClass({
  componentDidMount: function() {
      $(document).ready(function() {
          $('select').material_select();
      });
      $('#modeselectdiv').on('change', 'select', null, this.handleModeChange);
      $('#multicompselectdiv').on('change', 'select', null, this.handleMultiCompChange);
  },
  render() {
    return (
     <div className="row">
       <form action="//localhost:3001/filter" id="filter-classes" className="col s12">
        <div className="row col s12">
           <p>Commitment Level</p>
           <p>
             <input name="commitment" value="single" type="radio" id="commitment1" />
             <label htmlFor="commitment1">Single</label>
           </p>
           <p>
             <input name="commitment" value="pass" type="radio" id="commitment2" />
             <label htmlFor="commitment2">Pass</label>
           </p>
           <p>
             <input name="commitment" value="membership" type="radio" id="commitment3" />
             <label htmlFor="commitment3">Membership</label>
           </p>
        </div>

        <div className="row">
          <p className="range-field col s12">
          <p>Maximum Price</p>
            <input type="range" id="price-slider" min="0" max="100" name="max_price"/>
          </p>
        </div>

        <div className="row"> 
          <div className="input-field col s12">
            <select name="location" form="filter-classes">
              <option value="" disabled selected>Choose your option</option>
              <option value="Downtown Vancouver">Downtown Vancouver</option>
              <option value="Kitsilano">Kitsilano</option>
              <option value="Mount Pleasant">Mount Pleasant</option>
            </select>
            <label>Select Location</label>
          </div>
        </div> 

        <div className="row">
          <div className="input-field col s12">
            <input name="class_name" id="class-name" type="text" className="validate" placeholder="Class Name"/>
            <label htmlFor="class-name">Class Name</label>
          </div>
        </div> 

        <div className="row">
          <div className="input-field col s12">
            <select name="studio_name" form="filter-classes">
              <option value="" disabled selected>Choose your option</option>
              <option value="Stretch">Stretch</option>
              <option value="Karma">Karma</option>
              <option value="Chopra">Chopra</option>
            </select>
            <label>Select Studio</label>
          </div>
        </div>

        <div className="row col s12">
          <p>Minimum Rating</p>
            <p>
             <input name="rating" value="1" type="radio" id="rating1" />
             <label htmlFor="rating1">1</label>
            </p>  
            <p>
             <input name="rating" value="2" type="radio" id="rating2" />
             <label htmlFor="rating2">2</label>
            </p>  
            <p>
             <input name="rating" value="3" type="radio" id="rating3" />
             <label htmlFor="rating3">3</label>
            </p>  
            <p>
             <input name="rating" value="4" type="radio" id="rating4" />
             <label htmlFor="rating4">4</label>
            </p>  
            <p>  
             <input name="rating" value="5" type="radio" id="rating5" />
             <label htmlFor="rating5">5</label>
           </p>
        </div>

        <div className="row"> 
         <input type="submit" label="Submit"/>
        </div>
       </form>
     </div>
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