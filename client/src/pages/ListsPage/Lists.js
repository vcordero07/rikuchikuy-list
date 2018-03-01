import React, { Component } from "react";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
import "./Lists.css";

class Lists extends Component {
  render() {
    return (
      <div className="Site">
        <NavBarSection />
        <div className="Site-content list">
          <p>List</p>
        </div>
        <footer className="Site-footer">
          <FooterSection />
        </footer>
      </div>
    );
  }
}

export default Lists;
