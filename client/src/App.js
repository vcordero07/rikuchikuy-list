import React, { Component } from "react";
import "./App.css";
import { Button } from "./components";
import HeaderSection from "./components/layout/Header/Header";
import appText from "./utils/appText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection />
        <div className="App-container">
          <p className="App-intro">
            {appText.landingPage.welcome}
            <br />
          </p>
          <p className="App-intro">{appText.landingPage.intro}</p>
        </div>
      </div>
    );
  }
}

export default App;
