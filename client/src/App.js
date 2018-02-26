import React, { Component } from "react";
import "./App.css";
import { Button } from "./components";
import NavBarSection from "./components/layout/NavBar/NavBar";
import OverlaySection from "./components/layout/Overlay/Overlay";
import appText from "./utils/appText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarSection />
        <div className="App-container">
          <p className="App-intro">
            {appText.landingPage.welcome}
            <br />
          </p>
          <p className="App-intro">{appText.landingPage.intro}</p>
        </div>
        <div>
          <OverlaySection />
        </div>
      </div>
    );
  }
}

export default App;
