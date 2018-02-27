import React, { Component } from "react";
// import { Button } from "./components";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import OverlaySection from "../../components/layout/Overlay/Overlay";
import homeText from "../../utils/homeText";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBarSection />
        <div className="Home-container">
          <p className="Home-intro">
            {homeText.landingPage.welcome}
            <br />
          </p>
          <p className="Home-intro">{homeText.landingPage.intro}</p>
          <br />
          <p className="Home-intro">
            <a href="/signup">{homeText.landingPage.register}</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
