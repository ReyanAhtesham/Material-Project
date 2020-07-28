import React, { Component, useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import sizor from "./Pics/haircut.png"
import icon from "./Pics/icon.png"
import machine from "./Pics/machine.png"
import razoor from "./Pics/razoor.jpg"
import seat from "./Pics/seat.png"
import shave from "./Pics/shave.png"
import moos from "./Pics/Moose.png"
import  Aos from "aos"
import "aos/dist/aos.css"
 

const Card = () => {
  useEffect(() => {
    Aos.init({})
      }, [])

    return (
      <div className="" style={{paddingTop:"50px"}}>
        <h1 className="center-align">
          Services 
        </h1>
    <div className="row">
  <div  style={{paddingTop:"100px"}}>
       <div className="col s2 offset-s1 card-panel"
       data-aos="fade-up"
       data-aos-duration="3000">
       <img src={sizor} className="pon"/>
         <h4 className="center-align">Haircut</h4>
       </div>


       <div  className="col s2 offset-s2 card-panel"
       data-aos="fade-up"
       data-aos-duration="2000">
        <img src={icon} className="pon"/>
        <h4 className="center-align">Polish</h4>
       </div>


       <div  className="col s2 offset-s2 card-panel"
       data-aos="fade-up"
       data-aos-duration="3000">
       <img src={machine} className="pon"/>
       <h4 className="center-align">Styling</h4>
       </div>
       <div className="col s1">
</div>
       </div>
       <div  style={{paddingTop:"350px"}}>
       <div  className="col s2 offset-s1 card-panel"
       data-aos="fade-up"
       data-aos-duration="2000">
       <img src={razoor} className="pon"/>
       <h4 className="center-align">Shave</h4>
       </div> 


       <div  className="col s2 offset-s2 card-panel"
       data-aos="fade-up"
       data-aos-duration="3000">
       <img src={shave} className="pon"/>
       <h4 className="center-align">Clean</h4>
       </div>


       <div  className="col s2 offset-s2 card-panel"
       data-aos="fade-up"
       data-aos-duration="2000">
       <img src={seat} className="pon"/> 
       <h4 className="center-align">Groom</h4>
                 </div>
       <div className="col s1">
</div></div>
      </div>
    </div>
    );
  }


export default Card;