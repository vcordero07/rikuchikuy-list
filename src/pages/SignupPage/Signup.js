import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Signup.css";

import SignupSection from "./SignupSection";

export function Signup(props) {
  if (props.loggedIn) {
    console.log("signup: yes, you are the best!");
    return <Redirect to="/list" />;
  } else {
    console.log("signup: not yet");
  }

  return (
    <div className="Signup">
      <SignupSection />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);
