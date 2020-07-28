import React, { Component,useEffect } from "react";
import M, { Carousel } from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
 
function Meg() {

    useEffect(()=> {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, options);  
        });
        const options = {   
            draggable: true,
            duration: 200,
            fullWidth:true,   
          };
          var instance = M.Carousel.getInstance(Carousel);
          instance.next(3);
    }, [])
    return (
        <div>
        <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
        <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
        <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
        <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
        <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
      </div>
          
    )
}
export default Meg