import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
