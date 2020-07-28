import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css"
import { Link } from "react-router-dom";


class PushPin extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('nav');
        var instances = M.Pushpin.init(elems, option);
      }); 
      var option ={
        top: 500,
        bottom: 4500,
        offset: 0
      }
  }
  render() {
    return (
   <div >



<nav>
        <div class="nav-wrapper transparent">
          <a href="#" class="brand-logo center">Cutting Edge</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
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

export default PushPin;
{/*<nav>
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
   */}