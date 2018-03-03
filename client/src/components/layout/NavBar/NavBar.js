import React from "react";
import { connect } from "react-redux";

import "./NavBar.css";
import NavBarSection from "./NavBarSection";

export function NavBar(props) {
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
