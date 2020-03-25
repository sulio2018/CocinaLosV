import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FoodStand from "./pages/FoodStand";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import "./App.css"

function App() {
  return (

    <div className='page-container'>
      <div className='content-wrap'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/foodstand" component={FoodStand} />
            <Route exact path="/catering" component={Catering} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
