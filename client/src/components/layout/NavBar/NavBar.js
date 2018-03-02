import React from "react";
import { connect } from "react-redux";

import "./NavBar.css";
import NavBarSection from "./NavBarSection";

export function NavBar(props) {
  // if (props.loggedIn) {
  //   // console.log("NavBar: you're in");
  //   // return <Redirect to="/list" />;
  // } else {
  //   // console.log("NavBar: not yet");
  // }

  return (
    <div className="NavBar">
      <NavBarSection loggedIn={props.loggedIn} />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
