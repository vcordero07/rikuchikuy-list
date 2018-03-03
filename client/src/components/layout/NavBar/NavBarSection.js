import React, { Component } from "react";
import NavItems from "./NavItems";
import "./NavBar.css";
import navBarLogo from "../../../assets/img/inca7.png";

export default class NavBarSection extends Component {
  state = {
    navLinks: [
      { title: "Sign in", href: "/signin", click: false },
      { title: "List", href: "/list", click: false },
      { title: "Settings", href: "#", click: false }
    ]
  };
  render() {
    const createLinkItem = (item, index) => {
      let newItem = item;
      if (index === 0 && this.props.loggedIn) {
        newItem = {
          title: "Log out?",
          href: "/",
          click: true
        };
      }
      return (
        <NavItems
          key={newItem.title + index}
          href={newItem.href}
          click={newItem.click}
          title={newItem.title}
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
