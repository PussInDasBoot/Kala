import React, {Component} from 'react';
import Filters from './Filters.jsx';
import SimpleMap from './Map.jsx';
import $ from 'jquery';

class App extends Component {

  // componentDidMount() {
  //   console.log("componentDidMount App");
  //   $.get("http://localhost:3001")
  //   .done(function(data) {
  //     console.log("Got data from API: ", data);
  //     // set the contact list as a state property of App
  //     // automatically re-renders App
  //     this.setState({studios: data})
  //   }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
  // }


  render() {
    {this.state &&
    console.log(this.state.studios)
    }
    return (
      <div>
        <div id="filters">
          <h1>Hello React :)</h1>
          <Filters />
        </div>
        <div id="map" style={{height: "300px"}}>
          <SimpleMap />
        </div>
        <div id="calendar">
          
        </div>
      </div>
    );
  }
}
export default App;