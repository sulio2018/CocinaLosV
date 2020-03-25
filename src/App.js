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
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/about"> <About /> </Route>
            <Route exact path="/foodstand"> <FoodStand /> </Route>
            <Route exact path="/catering"> <Catering /> </Route>/>
            <Route exact path="/contact"> <Contact /> </Route> />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;
