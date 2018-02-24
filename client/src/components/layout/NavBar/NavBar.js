import React from "react";
import NavItems from "./NavItems";
import "./NavBar.css";

// export default function HeaderSection(props) {
//   return (
//     <section id="Header">
//       <h1 className="Header-title">Rikuchikuy List</h1>
//       <div className="Header-navbar-menu">
//         <ul className="Header-navbar-ul">
//           <li>Sign In</li>
//           <li>List</li>
//           <li>Settings</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

export default class NavBar extends React.Component {
  state = {
    navLinks: [
      { title: "Home", href: "#" },
      { title: "List", href: "#" },
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
            <a className="navbar-title" href="#">
              <img
                alt="Brand"
                className="NavBar-img"
                src={require("./llama-3.png")}
              />
              Rikuchikuy List
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
