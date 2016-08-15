import React, {Component} from 'react';



var Filters = React.createClass({
  getInitialState: function (){
    return {commitment: "", price: "", class_name: "", studio_name: "", location: ""}
  },
  componentDidMount: function() {
    $('select').on("change", () => {this.handleChange()}).material_select();
  },
  handleChange(e) {
    var commitmentvalue = (this.commitments.find(function (input){
        return input.checked;
      }) || {}).value
    this.setState({
      commitment: commitmentvalue,
      max_price: commitmentvalue && this.max_price.value,
      class_name: this.class_name.value,
      studio_name: this.studio_name.value,
      location: this.location.value,
      rating: (this.ratings.find(function (input){
        return input.checked;
      }) || {}).value
    }, function (){
      console.log(this.state);
    }.bind(this));

  },
  handleFormSubmit (e) {
    e.preventDefault();

    this.props.onFilterSubmit(this.state);
  },
  render() {
    this.commitments = [];
    this.ratings = [];
    return (
      <form onSubmit={this.handleFormSubmit} id="filter-classes">
        <div className="row">
          <div className="col s6">
            <label>Choose a level of commitment:</label>
            <p>
              <input ref={(el) => {this.commitments[0] = el;}} name="commitment" value="single" type="radio" id="commitment1" onClick={this.handleChange}/>
              <label htmlFor="commitment1">Single</label>
            </p>
            <p>
              <input ref={(el) => {this.commitments[1] = el;}} name="commitment" value="pass" type="radio" id="commitment2" />
              <label htmlFor="commitment2" onClick={this.handleChange}>Pass</label>
            </p>
            <p>
              <input ref={(el) => {this.commitments[2] = el;}} name="commitment" value="membership" type="radio" id="commitment3" />
              <label htmlFor="commitment3" onClick={this.handleChange}>Membership</label>
            </p>
          </div>
          
          <div className="col s6">
            <p className="range-field">
              <span style={{visibility: this.state.commitment ? "visible" : "hidden"}}>
            <label>Maximum Price</label>
              <input ref={(el) => {this.max_price = el}} type="range" id="price-slider" min="5" max="30" name="max_price" onChange={this.handleChange}/>
              </span>
            </p>
          </div>
          <div className="input-field col s6">
            <input ref={(el) => {this.class_name = el}} name="class_name" id="class-name" type="text" className="validate" placeholder="Class Name" onChange={this.handleChange}/>
            <label htmlFor="class-name">Class Name</label>
          </div>

          <div className="input-field col s6">
            <select ref={(el) => {this.studio_name = el}} name="studio_name" form="filter-classes">
            <option value=""></option>

            { this.props.studios.map((studio) => {
               return <option key={studio.id} value={studio.name}>{studio.name}</option>
             })}
            </select>
            <label>Select Studio</label>
          </div>

          <div className="input-field col s6">
            <select ref={(el) => {this.location = el}} name="location" form="filter-classes" onChange={this.handleChange}>
              <option value=""></option>
              <option value="Downtown Vancouver">Downtown Vancouver</option>
              <option value="Kitsilano">Kitsilano</option>
              <option value="Mount Pleasant">Mount Pleasant</option>
              <option value='East Vancouver'>East Vancouver</option>
            </select>
            <label>Select Location</label>
          </div>

          <div className="col s6">
            <label>Minimum Rating</label>
              <p>
              <input ref={(el) => {this.ratings[0] = el;}} name="rating" value="1" type="radio" id="rating1" />
              <label className="radio" htmlFor="rating1">1</label>

              <input ref={(el) => {this.ratings[1] = el;}} name="rating" value="2" type="radio" id="rating2" />
              <label className="radio" htmlFor="rating2">2</label>

              <input ref={(el) => {this.ratings[2] = el;}} name="rating" value="3" type="radio" id="rating3" />
              <label className="radio" htmlFor="rating3">3</label>

              <input ref={(el) => {this.ratings[3] = el;}} name="rating" value="4" type="radio" id="rating4" />
              <label className="radio" htmlFor="rating4">4</label>

              <input ref={(el) => {this.ratings[4] = el;}} name="rating" value="5" type="radio" id="rating5" />
              <label className="radio" htmlFor="rating5">5</label>
             </p>
          </div>
          
          <input id="form-btn-text" className="waves-effect waves-light btn-flat form-btn" type="submit" label="Filter"/>
        </div>
     </form>
    );
    // Click event handler on the button that does ajax request for classes: "http://localhost:3001/classes_outside_busy_time" And changes parent state (App) state: classes with the new data.
  }
})
export default Filters;

// { this.props.studios.map(function(studio) {
//                 return <Marker key={studio.id} studio={studio}
//                 position={{ lat: studio.lat, lng: studio.lng }}
//                 studioid={{ studioid: studio.id }} />
//               })}