import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProtectedData } from "../../actions/protected-data";
import { getList, addItem, getListAndItems } from "../../actions/lists";
// import GoogleUrlShortner from "react-google-url-shortner";

import requiresLogin from "../../components/requires-login";
import NavBarSection from "../../components/layout/NavBar/NavBar";
import FooterSection from "../../components/layout/Footer/Footer";
// import Modal from "../../modal";
import Item from "./Item";
import "./Lists.css";

class Lists extends Component {
  state = {
    title: "",
    note: "",
    link: "",
    price: "",
    errorMsg: ""
  };

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = async () => {
    await this.props.dispatch(fetchProtectedData());
    await this.props.dispatch(getList());
    await this.props.dispatch(getListAndItems());
    // this.props.dispatch(fetchProtectedData()).then(() => {\
    //   this.props.dispatch(getList());
    //   this.props.dispatch(getListAndItems()); //this is not working
    // });
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // _toggleModalMode = () => {
  //   this.setState({
  //     isModalOpen: true
  //   });
  // };

  _onSubmit = e => {
    e.preventDefault();
    if (this.state.title === "") {
      this.setState({
        errorMsg: "Please enter a title"
      });
    } else {
      let listID = this.props.list.listID;
      const item = {
        title: this.state.title,
        note: this.state.note,
        link: this.state.link,
        price: this.state.price
      };
      // console.log("item:", item);
      this.props.dispatch(addItem(listID, item));
      this.setState({
        title: "",
        note: "",
        link: "",
        price: "",
        errorMsg: ""
      });
    }
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
                className="input-list required"
                placeholder="Title"
                value={this.state.title}
                onChange={this._onChange}
              />
              <input
                type="text"
                name="note"
                id="list-note"
                className="textarea-list"
                placeholder="Note"
                value={this.state.note}
                onChange={this._onChange}
              />
              <input
                type="text"
                name="link"
                id="list-link"
                className="link-list"
                placeholder="Link"
                value={this.state.link}
                onChange={this._onChange}
              />
              <input
                type="number"
                name="price"
                id="list-price"
                className="price-list"
                placeholder="Price: $$"
                step=".01"
                value={this.state.price}
                onChange={this._onChange}
              />
              <div className="form-list-border">
                <button className="btn-list" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <br /> <br /> <br />
          <div className="list-results">
            {this.props.list.items &&
              this.props.list.items.map((item, i) => {
                // console.log("this.props.list.items:", this.props.list.items);
                // console.log("items:", items);
                if (!item) return <div />;
                return <Item key={item.id} data={item} />;
              })}
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
