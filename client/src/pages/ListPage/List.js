import React, { Component } from "react";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
import "./List.css";

class List extends Component {
  render() {
    return (
      <div className="List Site">
        <NavBarSection />
        <div className="Site-content">
          <p>List</p>
        </div>
        <footer className="Site-footer">
          <FooterSection />
        </footer>
      </div>
    );
  }
}

export default List;
