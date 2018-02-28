import React from "react";
import { connect } from "react-redux";

import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
// import OverlaySection from "../../components/layout/Overlay/Overlay";
import homeText from "../../utils/homeText";

import "./Home.css";

export function Home(props) {
  if (props.loggedIn) {
    return console.log("you are loggedIn");
  } else {
    console.log("not yet");
  }
  return (
    <div className="home Site">
      <NavBarSection />
      <div className="Site-content">
        <p className="home-intro">
          {homeText.landingPage.welcome}
          <br />
        </p>
        <p className="home-intro">{homeText.landingPage.intro}</p>
        <br />
        <p className="home-intro">
          <a className="home-signup" href="/signup">
            {homeText.landingPage.register}
          </a>
        </p>
      </div>
      <footer className="Site-footer">
        <FooterSection />
      </footer>
    </div>
  );
}
const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
