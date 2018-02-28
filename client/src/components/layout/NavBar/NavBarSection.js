import React, { Component } from "react";
import NavItems from "./NavItems";
import "./NavBar.css";
import navBarLogo from "../../../assets/img/inca7.png";

export default class NavBarSection extends Component {
  state = {
    navLinks: [
      { title: "Sign in", href: "/signin" },
      { title: "List", href: "/list" },
      { title: "Settings", href: "#" }
    ]
  };
  render() {
    const createLinkItem = (item, index) => {
      return (
        <NavItems
          key={item.title + index}
          href={item.href}
          title={item.title}
        />
      );
    };

    const _navLinks = this.state.navLinks.map(createLinkItem);

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#nav-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-top" href="/">
              <img alt="Brand" className="NavBar-img" src={navBarLogo} />
              <span className="navbar-title">Rikuchikuy List</span>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">{_navLinks}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
