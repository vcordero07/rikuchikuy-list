import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";

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

        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="block">
              <span className="fa fa-lightbulb-o fa-3x" />
              <h5>Have an idea? </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
                sollicitudin dui, at ultrices augue. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In venenatis vel metus eget
                laoreet. Nam convallis mauris in placerat tempus.
              </p>
            </div>
          </div>
          <div className="col-sm-4  col-md-4">
            <div className="block">
              <span className="fa fa-pencil fa-3x" />
              <h5> blah blah</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
                sollicitudin dui, at ultrices augue. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In venenatis vel metus eget
                laoreet. Nam convallis mauris in placerat tempus.
              </p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="block">
              <span className="fa fa-share fa-3x" />
              <h5>Dont forget to share </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
                sollicitudin dui, at ultrices augue. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In venenatis vel metus eget
                laoreet. Nam convallis mauris in placerat tempus.
              </p>
            </div>
          </div>
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
