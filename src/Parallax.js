import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import shop from "./Pics/shop.jpg"
import "./App.css"

class Parallax extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems, {});
      });
  
  }
  render() {
    return (
      <div style={{paddingBottom:"",paddingTop:"100px"}}>
        <div className="parallax-container">
        <div className="parallax"><img className="port" src={shop} /></div>
        <h1 className="center-align " style={{paddingTop:"50px"}}>
           The Cutting Edge
        </h1>
        <div className="row">
       <h5 className="center-align col s6 offset-s3" style={{position:"absolute",bottom:"270px"}}>
       Barber is a person whose occupation is mainly to cut dress groom style and shave men.
         </h5>
         <button className="btn waves-effect deep-orange lighten-3" style=
         {{position:"absolute",right:"610px",top:"250px"}}>
           Learn More
         </button>
</div>
        </div>
          </div>
    );
  }
}

export default Parallax;