import React, {Component} from 'react';

var Navbar = React.createClass({
  render() {

    return (
      <div className="navbar">
        <div className="logo"><img className="logo-image" src="http://www.sfu.ca/~reckersl/kalaLogo.png" alt="" /></div>
        <div className="kala-title"><h5><span className="kala">Kala</span>nder</h5></div>
        <div className="logout"><a href="//localhost:3001/logout">Logout</a></div>
        <div className="profile-name">{this.props.profile.name}
        <img className="profile-picture" src={this.props.profile.profile_picture} alt=""/></div>
      </div>

    );
  }
});

export default Navbar;