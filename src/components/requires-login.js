import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../components/layout/Spinner/Spinner";

import "./App.css";

export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <Spinner />;
    } else if (!loggedIn || error) {
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || "Component";
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};
