import React, { Component } from "react";
import "./App.css"
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import car from "./mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg"
import cost from "./gray-hand-tool-1319459.jpg"
import cast from "./brown-and-silver-steel-tool-3654937.jpg"
import Carousel from "./Carousel";

class Navbar extends Component {
  componentDidMount() {
    const options = {   
      draggable: true,
      duration: 200, 
      distance:6000,
      indicators:true,  
      shift:100,
    };
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems,options);
    });

  }
  render() {
    return (
      
  <div className="carousel carousel-slider center" style={{paddingTop:"600px"}}>
  <div className="carousel-item white-text">
    <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
    <img style={{position:"absolute",zIndex:"1",left:"0px"}} className="c-1" src={car} />
    <div className="row" style={{position:"absolute",zIndex:"2",bottom:"250px"}}>
    <h1 className="col s8 left-align" >Where men come to enhance their best.</h1>
    <h6 className="col s6 left-align" style={{position:"absolute",left:"0px",bottom:"-30px"}}
    >Our BarberShop is a place purely for men who value premium quality and taste.</h6>
     <button className="btn waves-effect deep-orange lighten-3" style=
         {{position:"absolute",right:"970px",top:"250px"}}>
           Learn More
         </button>
    </div>
  
  </div>
 
  <div className="carousel-item amber white-text" href="#two!">
  
  <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
   <img className="c-1" src={cost}/>
   <div className="row" style={{position:"absolute",zIndex:"2",bottom:"250px"}}>
    <h1 className="col s8 left-align"  >Our Haircut Enhances your Personality.</h1>
    <h6 className="col s6 left-align" style={{position:"absolute",left:"0px",bottom:"-30px"}}
    >Our BarberShop is a place purely for men who value premium quality and taste.</h6>
     <button className="btn waves-effect deep-orange lighten-3" style=
         {{position:"absolute",right:"960px",top:"250px"}}>
           Learn More
         </button>
    </div>
  
  
  </div>
  <div className="carousel-item green white-text" href="#three!">
    
  <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
 <img className="c-1" src={cast}/>
 
 <div className="row" style={{position:"absolute",zIndex:"2",bottom:"250px"}}>
    <h1 className="col s8 left-align" >Its Not Just a Haircut,It is an Experience.</h1>
    <h6 className="col s6 left-align" style={{position:"absolute",left:"0px",bottom:"-30px"}}
    >Our BarberShop is a place purely for men who value premium quality and taste.</h6>
     <button className="btn waves-effect deep-orange lighten-3" style=
         {{position:"absolute",right:"990px",top:"250px"}}>
           Learn More
         </button>
    </div>
  
  </div>
  
</div>
    );
  }
}

export default Navbar;