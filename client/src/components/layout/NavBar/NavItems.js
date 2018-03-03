import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../../actions/auth";
import { clearAuthToken } from "../../../local-storage";
import { Redirect } from "react-router-dom";
import "./NavBar.css";

export class NavItems extends React.Component {
  _logout() {
    // localStorage.clear();
    // window.location = "/";
    this.props.dispatch(clearAuth());
    clearAuthToken();
    return <Redirect to="/" />;
  }
  render() {
    let newnavItems;

    if (this.props.click) {
      newnavItems = (
        <a href={this.props.href} onClick={() => this._logout()}>
          {this.props.title}
        </a>
      );
    } else {
      newnavItems = <a href={this.props.href}>{this.props.title}</a>;
    }

    return <li>{newnavItems}</li>;
  }
}

export default connect()(NavItems);
