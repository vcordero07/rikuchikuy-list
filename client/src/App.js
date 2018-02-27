import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignupPage/Signup";
import List from "./pages/ListPage/List";
import Home from "./pages/HomePage/Home";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/signup/" component={Signup} />
            <Route exact path="/List/" component={List} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
