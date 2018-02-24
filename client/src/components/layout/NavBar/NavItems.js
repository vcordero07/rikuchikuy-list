import React from "react";
import "./NavBar.css";

export default class NavItems extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
}
