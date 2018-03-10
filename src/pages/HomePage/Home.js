import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
// import OverlaySection from "../../components/layout/Overlay/Overlay";
import homeText from "../../utils/homeText";

import "./Home.css";

export function Home(props) {
  // if (props.loggedIn) {
  //   console.log("you are loggedIn");
  // } else {
  //   console.log("not yet");
  // }
  return (
    <div className="home Site">
      <NavBarSection />
      <div className="Site-content">
        <br />
        <h1 className="home-title">{homeText.homePage.title}</h1>

        <div className="sub-title">
          <h5>{homeText.homePage.subHeader}</h5>
        </div>

        <div className="center">
          <Link className="home-btn home-signup" to="/signup">
            {homeText.homePage.register}
          </Link>
        </div>

        <br />
        <div className="home-intro home-img home-pad">
          <p>{homeText.homePage.welcome}</p>
          <p>{homeText.homePage.intro}</p>
          <p>{homeText.homePage.purpose}</p>
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
