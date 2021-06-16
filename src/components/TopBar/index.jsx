import React, { Component } from "react";
import "./topbar.css";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top-nav-bar">
        <div className="coaching-details">
          <span className="coaching-name">Edyoda</span> <br />
          <span className="coaching-stories">Stories</span>
        </div>
        <span className="courses-option">Explore Categories</span>
        <p className="coaching-description">
          EdYoda is free learning and knowledge <br />
          sharing platform for techies
        </p>
        <button className="nav-button">
          Go to main website
        </button>
      </div>
    );
  }
}

export default TopBar;
