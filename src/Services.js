import React,{useEffect} from 'react';
import './App.css';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Carousel from './Carousel';
import M from "materialize-css";
import sit from "./Pics/sit.jpg"
import sizor from "./Pics/haircut.png"
import icon from "./Pics/icon.png"
import machine from "./Pics/machine.png"
import razoor from "./Pics/razoor.jpg"
import seat from "./Pics/seat.png"
import shave from "./Pics/shave.png"
import bowl from "./Pics/bowl.jpg"
import scor from "./Pics/Panda.png"
import hp from "./Pics/Nike.png"
import horse from "./Pics/Fist.png"
import database from "./Pics/Big B.png"
import batman from "./Pics/A.png"
import Saph from "./Pics/Saph.png"
import PushPin from "./PushPin"
import Card from "./Card"


export function Services() {
  useEffect(() => {
    M.AutoInit();
},[])
  return (
<div>
  <Carousel />
    <div className="parallax-container">
    <div className="parallax">
    <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
    <img className="port" src={sit} /></div>
    <h1 className="center-align white-text" style={{paddingTop:"150px",fontFamily:"Alex Brush",fontWeight:"10px",fontSize:"90px"}}>
          A Class Above
        </h1>
        <div className="row">
       <h4 className="center-align col s6 offset-s3" style={{position:"absolute",bottom:"100px"}}>
         </h4>
</div>
</div>

<Card />

      <div className="parallax-container">
    <div className="parallax">
    <h1 className="toxt black-text">the image will load shortly if not loading reload the page</h1>
    <img className="port" src={bowl} /></div>
    <h1 className="center-align white-text" style={{paddingTop:"150px"}}>
          Mold you into a better looking man
        </h1>
        <div className="row">
       <h4 className="center-align col s6 offset-s3 white-text" style={{position:"absolute",bottom:"100px"}}>
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
 </div> 
);
}

export default Services;
