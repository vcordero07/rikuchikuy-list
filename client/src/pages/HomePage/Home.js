import React from "react";
import { connect } from "react-redux";

import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
// import OverlaySection from "../../components/layout/Overlay/Overlay";
import homeText from "../../utils/homeText";

import "./Home.css";

export function Home(props) {
  if (props.loggedIn) {
    console.log("you are loggedIn");
  } else {
    console.log("not yet");
  }
  return (
    <div className="home Site">
      <NavBarSection />
      <div className="Site-content">
        <div className="home-intro home-img ">
          <p>
            {homeText.landingPage.welcome}
            <br />
          </p>
          <p>{homeText.landingPage.intro}</p>
          <br />
          <button className="home-btn">
            <a className="home-signup" href="/signup">
              {homeText.landingPage.register}
            </a>
          </button>
        </div>
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
