
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FoodStand from "./pages/FoodStand";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import "./App.css"

class App extends Component {
  render() {
    return (

      <div className='page-container'>
        <div className='content-wrap'>
          <HashRouter basename="/">
            <Navbar />
            <div>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/foodstand">Foodstand</Link></li>
                <li><Link to="/catering">Catering</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>

              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/foodstand" component={FoodStand} />
              <Route exact path="/catering" component={Catering} />
              <Route exact path="/contact" component={Contact} />

            </div>
            <Footer />
          </HashRouter>
        </div>
      </div>

    );
  }
}

export default App;
