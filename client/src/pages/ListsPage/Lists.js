import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProtectedData } from "../../actions/protected-data";
import { getList } from "../../actions/lists";
import requiresLogin from "../../components/requires-login";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
import "./Lists.css";

class Lists extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData()).then(async () => {
      await this.props.dispatch(getList());
    });
  }

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

export default requiresLogin()(connect(mapStateToProps)(Lists));
