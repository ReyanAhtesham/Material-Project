import React, { Component } from "react";
import "./App.css"
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import grey from "./gray-hand-tool-1319459.jpg"
import black from "./Pics/vaishnav-chogale-XeElxiYTbs0-unsplash - Copy.jpg"


class Reviews extends Component {
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
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
      var instances = M.Datepicker.init(elems, {});
    });

  }
  render() {
    return (
      <div>
      <div style={{backgroundImage:`url(${grey})`,height:"700px", backgroundSize: "cover"}}>
<div >
  <div className="carousel carousel-slider center" >
  <div className="carousel-fixed-item" >

  </div>
  <div className="carousel-item white-text" href="#zero!">
<h1>
    Inset A Good Review Here.
</h1>
<h4>Reyan Gilani</h4>
  </div>
  <div className="carousel-item white-text" href="#one!">
<h1>
    Never in my long career have i seen such a beautiful design.
</h1>
<h4>Reyan Gilani</h4>
  </div>
  <div className="carousel-item white-text" href="#two!">
  <h1>
    You should hire him.
</h1>
<h4>Reyan Gilani</h4>
  </div>
  <div className="carousel-item white-text" href="#three!">
  <h1>
    Yes, you should.
</h1>
<h4>Reyan Gilani</h4>
  </div>
  </div>
</div>

</div>
    <div className="row">
    <div className='col s6 white'>
   <img src={black} className="hro"/>
    </div>
    <div className="col s6 white black-text" style={{paddingTop:"100px"}}>
  

    <div class="row">
  <form class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
        <label for="first_name">First Name</label>
      </div>
      <div class="input-field col s6">
        <input id="last_name" type="text" class="validate"/>
        <label for="last_name">Last Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" type="password" class="validate"/>
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate"/>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        This is an inline input field:
        <div class="input-field inline">
          <input id="email_inline" type="email" class="validate"/>
          <label for="email_inline">Email</label>
          <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="input-field col s12">
        Please select date
        <input type="text" class="datepicker"></input>
      </div>
    </div>
  
  </form>
</div>


    </div>
</div>
  </div>
    );
  }
}

export default Reviews;