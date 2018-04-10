import React, { Component } from "react";

// Header
class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-1">
          <a href="/" className="brand-logo center">
            Star Wars Api App for Zone
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
