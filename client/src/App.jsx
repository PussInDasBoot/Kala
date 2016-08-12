import React, {Component} from 'react';
import Filters from './Filters.jsx';
import SimpleMap from './Map.jsx';
import Calendar from './Calendar.jsx';
import $ from 'jquery';

class App extends Component {

  componentDidMount() {
    var event_data = [
{
color_id: "9",
created: "2016-08-11T21:26:55.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-11T11:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=bWltNHJ2dTJoaXI5MTVyNTdxOGdyYWd2c28gcjhjaGEzbEBt",
i_cal_uid: "mim4rvu2hir915r57q8gragvso@google.com",
id: "mim4rvu2hir915r57q8gragvso",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 3,
start: {
date_time: "2016-08-11T07:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:30:50.374+00:00"
},
{
color_id: "9",
created: "2016-08-11T21:28:29.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-11T16:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=bGFvcDZmNWx0a3RsODYybmlkOWdwdDYwNjAgcjhjaGEzbEBt",
i_cal_uid: "laop6f5ltktl862nid9gpt6060@google.com",
id: "laop6f5ltktl862nid9gpt6060",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 1,
start: {
date_time: "2016-08-11T12:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:30:55.641+00:00"
},
{
color_id: "9",
created: "2016-08-11T21:27:12.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-12T15:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=ZGc0MmJjbHBuMmlrOWFlcjNxcGVnNmw5bzAgcjhjaGEzbEBt",
i_cal_uid: "dg42bclpn2ik9aer3qpeg6l9o0@google.com",
id: "dg42bclpn2ik9aer3qpeg6l9o0",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 4,
start: {
date_time: "2016-08-12T07:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:05.851+00:00"
},
{
color_id: "5",
created: "2016-08-11T21:37:03.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-14T13:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=dmU2MGdxZWgwOWQyN2kyOGE0Zm5zbmkxOHMgcjhjaGEzbEBt",
i_cal_uid: "ve60gqeh09d27i28a4fnsni18s@google.com",
id: "ve60gqeh09d27i28a4fnsni18s",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-14T10:00:00.000-07:00"
},
status: "confirmed",
summary: "Imaginary Brunch",
updated: "2016-08-11T21:37:15.160+00:00"
},
{
color_id: "9",
created: "2016-08-11T21:29:15.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-15T11:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=dmJpM2tyNWw1azh0cGlzazR0MDRuY2YzdDAgcjhjaGEzbEBt",
i_cal_uid: "vbi3kr5l5k8tpisk4t04ncf3t0@google.com",
id: "vbi3kr5l5k8tpisk4t04ncf3t0",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-15T07:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:11.780+00:00"
},
{
color_id: "9",
created: "2016-08-11T21:29:25.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-15T16:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=dDRzM2MzaDkyczIwMzRiNnJtZnVlaXZ0N3MgcjhjaGEzbEBt",
i_cal_uid: "t4s3c3h92s2034b6rmfueivt7s@google.com",
id: "t4s3c3h92s2034b6rmfueivt7s",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-15T12:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:15.949+00:00"
},
{
color_id: "9",
created: "2016-08-11T21:29:35.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-16T10:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=Z2hhMXFhdmNoaGI2cW8yY3NxM2c3dHF0ZGcgcjhjaGEzbEBt",
i_cal_uid: "gha1qavchhb6qo2csq3g7tqtdg@google.com",
id: "gha1qavchhb6qo2csq3g7tqtdg",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-16T07:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:20.308+00:00"
},
{
color_id: "4",
created: "2016-08-11T21:29:44.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-16T11:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=dnY0bmZodmxvbXVkZnZudnQ0MmRwdWdqa3MgcjhjaGEzbEBt",
i_cal_uid: "vv4nfhvlomudfvnvt42dpugjks@google.com",
id: "vv4nfhvlomudfvnvt42dpugjks",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-16T10:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Dentist",
updated: "2016-08-11T21:31:28.475+00:00"
},
{
color_id: "10",
created: "2016-08-11T21:29:48.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-16T17:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=cWFoMTFqcGQ0dmZjdjBlNXB0NmwwNGxmN2sgcjhjaGEzbEBt",
i_cal_uid: "qah11jpd4vfcv0e5pt6l04lf7k@google.com",
id: "qah11jpd4vfcv0e5pt6l04lf7k",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-16T12:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:32.465+00:00"
},
{
color_id: "10",
created: "2016-08-11T21:30:14.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-17T11:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=bDNhZ3QzM2xzbWV2ZWY2NGhtY2hyNjNidTQgcjhjaGEzbEBt",
i_cal_uid: "l3agt33lsmevef64hmchr63bu4@google.com",
id: "l3agt33lsmevef64hmchr63bu4",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 0,
start: {
date_time: "2016-08-17T07:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:37.287+00:00"
},
{
color_id: "10",
created: "2016-08-11T21:30:23.000+00:00",
creator: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
end: {
date_time: "2016-08-17T16:00:00.000-07:00"
},
html_link: "https://www.google.com/calendar/event?eid=cWc5YXRrcDI0dGNobWsyZG1xb3E2YnNpODggcjhjaGEzbEBt",
i_cal_uid: "qg9atkp24tchmk2dmqoq6bsi88@google.com",
id: "qg9atkp24tchmk2dmqoq6bsi88",
kind: "calendar#event",
organizer: {
display_name: "Rachael Eckersley",
email: "r8cha3l@gmail.com"
},
sequence: 1,
start: {
date_time: "2016-08-17T12:00:00.000-07:00"
},
status: "confirmed",
summary: "Fake Work",
updated: "2016-08-11T21:31:42.104+00:00"
}
]
this.setState({google_events: event_data}); 


    // console.log("componentDidMount App");
    $.get("http://localhost:3001/studios")
    .done(function(data) {
      console.log("Got data from API: ", data);
      // set the contact list as a state property of App
      // automatically re-renders App
      this.setState({studios: data[0], classes: data[1]})
    }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
  }



  render() {
    // {this.state &&
    // console.log(this.state.google_events)
    // }
    return (
      <div>
        <div id="filters">
          
        </div>
        <div id="map">
        
        </div>
        <div id="calendar">
          {this.state &&
          <Calendar google_events={this.state.google_events}/>
          }
        </div>
      </div>
    );
  }
}
export default App;