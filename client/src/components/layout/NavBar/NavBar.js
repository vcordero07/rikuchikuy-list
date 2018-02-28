import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./NavBar.css";

import NavBarSection from "./NavBarSection";

export function NavBar(props) {
  if (props.loggedIn) {
    console.log("NavBar: you're in");
    // return <Redirect to="/list" />;
  } else {
    console.log("NavBar: not yet");
  }
  return (
    <div className="NavBar">
      <NavBarSection />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
