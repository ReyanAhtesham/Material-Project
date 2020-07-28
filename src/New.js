import React, { Component,useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import pix from "./Moving.jpg"
import pic from "./Moving2.jpg"
import './App.css';
import pin from "./Moving1.jpg"
import  Aos from "aos"
import "aos/dist/aos.css"


const New = () => {
  useEffect(() => {
    Aos.init({})
      }, [])
    return (
      <div className="row">
          <div className="col s6">
             <h1 className="subs">
                 We Came We saw
             </h1>
             <h1 className="heads center-align">
                 We Cut
             </h1>
             <p className="cont">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet turpis nec tincidunt ornare. Donec
              justo arcu, blandit et ante at, faucibus elementum eros. Praesent tincidunt arcu et arcu posuere, vel 
              aliquam enim cursus. Praesent aliquet quam quis ex condimentum mattis. Mauris nisl nibh, eleifend vitae
               faucibus in, lobortis sit amet nisl. Sed ut nibh a nulla vestibulum tincidunt. Praesent a orci dignissim,
                dignissim tortor ac, tristique enim. In quam dolor, dignissim ac nibh in, volutpat tempus tortor. Quisque 
          </p>
          </div>
          <div className="col s6 responsive-img" style={{height:"600px"}}>
             <img src={pic} className="norm norme" data-aos="fade-right"
       data-aos-duration="3000"/>
             <img src={pix} className="norm norma" 
              data-aos="fade-down"
              data-aos-duration="3000"/>
             <img src={pin} className="norm normi" 
              data-aos="fade-left"
              data-aos-duration="3000"/>
          </div>
          
    </div>
    );
  }


export default New;