import React from "react";

import "./Header.css";

export default function HeaderSection(props) {
  return (
    <section id="Header">
      <h1 className="Header-title">Rikuchikuy List</h1>
      <div className="Header-navbar-menu">
        <ul className="Header-navbar-ul">
          <li>Sign In</li>
          <li>List</li>
          <li>Settings</li>
        </ul>
      </div>
    </section>
  );
}
