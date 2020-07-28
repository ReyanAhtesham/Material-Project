import React,{useEffect} from 'react';
import './App.css';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Carousel from './Carousel';
import M from "materialize-css";
import sit from "./Pics/sit.jpg"
import './App.css';
import bowl from "./Pics/bowl.jpg"
import scor from "./Pics/Panda.png"
import hp from "./Pics/Nike.png"
import horse from "./Pics/Fist.png"
import database from "./Pics/Big B.png"
import batman from "./Pics/A.png"
import Saph from "./Pics/Saph.png"
import PushPin from "./PushPin"
import Moos from "./Pics/Moose.png"
import  Aos from "aos"
import "aos/dist/aos.css"


export function Packages() {
  useEffect(() => {
    M.AutoInit();
    Aos.init({});
},[])
  return (
<div>
  <Carousel />
  <div className="parallax-container">
    <div className="parallax">
    <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
    <img className="port" src={sit} /></div>
    <h1 className="center-align white-text" style
    ={{paddingTop:"150px",fontFamily:"Alex Brush",fontWeight:"10px",fontSize:"90px"}}>
          A Class Above
        </h1>
        <div className="row">
       <h4 className="center-align col s6 offset-s3" style={{position:"absolute",bottom:"100px"}}>
         </h4>
</div>
</div>
<h1 className="Packa">Packages</h1>
<img src={Moos} className="must"/>
<div className="row">
  <div  style={{paddingTop:"100px"}}>
       <div className="col s3 offset-s2 card-panel" style={{position:"relative"}}
        data-aos="fade-right"
        data-aos-duration="2000">

         <h4 className="center-align">Haircut</h4>

       <div className="row">
       <h6 className="col s3 Row">Haircut</h6>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$10</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
       </div>

       <div className="row">
       <h6 className="col s3 Row">Hair Trimming</h6>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$15</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
      </div>
      
       </div>

       <div className="col s3 offset-s2 card-panel" style={{position:"relative"}}
               data-aos="fade-left"
               data-aos-duration="2000">
        
       <h4 className="center-align">Shave</h4>

       <div className="row">
       <h5 className="col s3 Row">Clean Shave</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$10</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
       </div>
       
       <div className="row">
       <h5 className="col s3 Row">Beard Trimming</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$15</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
      </div>
      
       </div>

       <div  className="col s3 offset-s2 card-panel"
               data-aos="fade-right"
               data-aos-duration="3000">
       
       <h4 className="center-align">Style</h4>

       <div className="row">
       <h5 className="col s3 Row">Hair Styling</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$10</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
       </div>

       <div className="row">
       <h5 className="col s3 Row">Beard Styling</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$15</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
      </div>
      
       </div>

       <div  className="col s3 offset-s2 card-panel"
               data-aos="fade-left"
               data-aos-duration="3000">
       
       <h4 className="center-align">Face Mask</h4>

       <div className="row">
       <h5 className="col s3 Row">Face Cleanse</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$10</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
      </div>

      <div className="row">
       <h5 className="col s3 Row">Bright Facial</h5>
       <hr className="col s7" style={{borderTop:"2px dashed"}}></hr>
       <h5 className="col s2 Rew">$15</h5>
       <p>Barber is a person whose occupation is mainly to cut dress groom style and shave men.</p>
      </div>
      
      </div>
</div>
</div>


<div className="parallax-container white-text">
    <div className="parallax">
    <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
    <img className="port" src={bowl} /></div>
    <h1 className="center-align" style={{paddingTop:"150px"}}>
          Mold you into a better looking man
        </h1>
        <div className="row">
       <h4 className="center-align col s6 offset-s3" style={{position:"absolute",bottom:"100px"}}>
         Barber is a person whose occupation is mainly to cut dress groom style and shave men.
         </h4>
         <button className="btn waves-effect deep-orange lighten-3" style=
         {{position:"absolute",right:"610px",top:"390px"}}>
           Learn More
         </button>
</div>
</div>
<div className="row" style={{paddingTop:"50px"}}>
<h1 className="center-align">Associate</h1>
  <div className="col s1" style={{paddingLeft:"30px"}}>
    <img className="pant center-align" src={batman}/>
  </div>
  <div className="col s1 offset-s1">
    <img className="pant center-align" src={database}/>
  </div>
  <div className="col s1 offset-s1">
    <img className="pont center-align" src={horse}/>
  </div>
  <div className="col s1 offset-s1">
    <img className="pont center-align" src={Saph}/>
  </div>
  <div className="col s1 offset-s1"> 
    <img className="pant center-align" src={hp}/>
  </div>
  <div className="col s1 offset-s1">
    <img className="pant center-align" src={scor}/>
  </div>  
</div>
</div>  );
}

export default Packages;
