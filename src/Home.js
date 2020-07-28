import React,{useEffect} from 'react';
import './App.css';
import 'materialize-css';
import Mat from "./Mat"
import Mint from "./Mint"
import Mort from "./Mort"
import Meg from './meg';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Card from './Card';
import New from './New';
import Reviews from './Reviews';
import 'materialize-css';
import Parallax from './Parallax';
import PushPin from './PushPin';
import Friends from './Friends';
import Camp from "./Camp"

function Home() {
  return (
    <div>
      <Carousel />
      <Navbar />
      <New />
      <Parallax />
      <Card />
      <Reviews />
    </div>
    );
}

export default Home;
