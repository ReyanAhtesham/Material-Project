import React, { Component,useEffect } from "react";
import M, { Carousel } from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

function Mat() {
  useEffect(()=>{
    const options = {      
      draggable: true,
      duration: 200,
      fullWidth:true,
    };

    M.Carousel.init(this.Carousel);

    let instance = M.Carousel.getInstance(this.Carousel);
    instance.next();
    console.log(instance.isOpen);
 } ,[])
    return (
        <div>
          <div class="carousel" 
          ref={Carousel => {
            this.Carousel = Carousel;
          }} >
    <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
    <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
    <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
    <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
    <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
  </div>
      </div>
    )
  }


export default Mat;