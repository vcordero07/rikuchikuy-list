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
                Not a problem, add it to your list. Keep your wish list with you
                at all times. Now you can organize and store your ideas in one
                place. You can access your list from your mobile phone or in a
                browser by going to "rikuchikuy-list.xyz".
              </p>
            </div>
          </div>
          <div className="col-sm-4  col-md-4">
            <div className="block">
              <span className="fa fa-gift fa-3x" />
              <h5>It is your birthday.</h5>
              <p>
                See something you want for your birthday? Add to your wish list.
                Thinking ahead for holiday gifts? Add those to your wish list as
                well! It’s never been easier to have all your *wishes* in one
                place.
              </p>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div className="block">
              <span className="fa fa-share fa-3x" />
              <h5>Don’t forget to share </h5>
              <p>
                Sharing is caring! Don’t forget to share your list with your
                loves one. Like this app? recommend it to your friends. By
                creating an account, you can add unlimited items to your list.
                Remember it’s free!
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
