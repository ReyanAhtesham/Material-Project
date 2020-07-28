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
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Home from "./Home"
import Services from './Services';
import Packages from './Packages';

function App() {
  return (
    <div>
      <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Services" component={Services}/>
        <Route path="/Packages" component={Packages}/>
      </Switch>
    </main>
    </BrowserRouter>
    </div>
    );
}

export default App;
