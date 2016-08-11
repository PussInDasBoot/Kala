import React, {Component} from 'react';
import Filters from './Filters.jsx';
import SimpleMap from './Map.jsx';
import Calendar from './Calendar.jsx';
import $ from 'jquery';

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:3001/studios")
    .done(function(data) {
      console.log("Got data from API: ", data);
      // set the contact list as a state property of App
      // automatically re-renders App
      this.setState({studios: data[0], classes: data[1]})
    }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
  }


  render() {
    {this.state &&
    console.log(this.state.classes)
    }
    return (
      <div>
        <div id="filters">
          {this.state &&
          <Filters studios={this.state.studios}/>
          }
        </div>
        <div id="map" style={{height: "300px"}}>
        {this.state &&
          <SimpleMap studios={this.state.studios}/>
          }
        </div>
        <div id="calendar">
          {this.state &&
          <Calendar classes={this.state.classes}/>
          }
        </div>
      </div>
    );
  }
}
export default App;