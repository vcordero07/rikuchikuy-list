import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProtectedData } from "../../actions/protected-data";
import { getList } from "../../actions/lists";
import { addItem } from "../../actions/lists";
import requiresLogin from "../../components/requires-login";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
import "./Lists.css";

class Lists extends Component {
  state = {
    title: "",
    note: ""
  };

  componentDidMount() {
    this.props.dispatch(fetchProtectedData()).then(async () => {
      await this.props.dispatch(getList());
    });
  }
  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  _onSubmit = e => {
    e.preventDefault();
    const item = {
      title: this.state.title,
      note: this.state.note,
      listID: this.props.list.listID
    };
    console.log("item:", item);
    return this.props.dispatch(addItem(item.listID, item.title));
  };

  render() {
    return (
      <div className="Site">
        <NavBarSection />
        <div className="Site-content list">
          <div className="form-container">
            <form className="form-list-items" onSubmit={this._onSubmit}>
              <legend className="legend-list">
                {this.props.list.listTitle}
              </legend>
              <input
                type="text"
                name="title"
                id="list-title"
                className="input-list"
                placeholder="Title"
                value={this.state.title}
                onChange={this._onChange}
              />
              <textarea
                type="text"
                name="note"
                id="list-note"
                className="textarea-list"
                placeholder="Note"
                value={this.state.note}
                onChange={this._onChange}
              />
              <div className="form-list-border">
                <button className="btn-list" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
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
