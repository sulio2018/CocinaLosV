
import React, { Component } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
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
          <HashRouter>
            <div>
              <Navbar />
              <ScrollToTop>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/foodstand" component={FoodStand} />
                  <Route exact path="/catering" component={Catering} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </ScrollToTop>
            </div>
            <Footer />
          </HashRouter>
        </div>
      </div>

    );
  }
}

export default App;
