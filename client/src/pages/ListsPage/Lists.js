import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
import "./Lists.css";

class Lists extends Component {
  render() {
    return (
      <div className="Site">
        <NavBarSection />
        <div className="Site-content list">
          <p>Title: {this.props.list.title}</p>
        </div>
        <footer className="Site-footer">
          <FooterSection />
        </footer>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(Lists);
