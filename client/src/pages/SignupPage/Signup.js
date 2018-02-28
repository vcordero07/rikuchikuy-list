import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./Signup.css";

import SignupSection from "./SignupSection";

class Signup extends Component {
  render() {
    return (
      <div className="Signup">
        <SignupSection />
      </div>
    );
  }
}

export default Signup;
