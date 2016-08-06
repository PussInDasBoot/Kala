import React, {Component} from 'react';
import $ from 'jquery';

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:3001")
    .done(function(data) {
      console.log("Got data from API: ", data);
      // set the contact list as a state property of App
      // automatically re-renders App
      this.setState({studios: data})
    }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
  }


  render() {
    // console.log(this.state.studios)
    {this.state &&
    console.log(this.state.studios)
    }
    return (
      // {this.state &&
      // <h1>{this.state.studios} Hello React :)</h1>
      // }
      <h1>Hello React :)</h1>
    );
  }
}
export default App;