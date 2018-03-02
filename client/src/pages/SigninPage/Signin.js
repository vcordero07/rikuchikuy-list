import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Signin.css";

import SigninSection from "./SigninSection";

export function Signin(props) {
  if (props.loggedIn) {
    console.log("signin: you're in");
    return <Redirect to="/list" />;
  } else {
    console.log("singin: not yet");
  }
  return (
    <div className="Signin">
      <SigninSection />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signin);
