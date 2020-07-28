import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Carousel extends Component {
  render() {
    return (
      <div class="navbar-fixed">
        <nav>
        <div class="nav-wrapper transparent">
        <Link to="/" exact className="brand-logo left">Cutting Edge</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">

            <li>

            <Link to="/Services">Services</Link>
            </li>
            <li>
            <Link to="/Packages">Packages</Link>
            </li>


          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Carousel;