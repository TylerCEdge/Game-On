import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-dom-router";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MERN-Stack Game App</h2>
        </div>
        <Route path="/" exact component={nameHere} />
      </Router>
    );
  }
}

export default App;
