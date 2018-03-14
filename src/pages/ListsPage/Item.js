import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../../actions/lists";
import "./Item.css";

class Item extends Component {
  state = {
    title: this.props.data.title,
    note: this.props.data.note,
    bgcolor: this.props.data.bgcolor || "#ffffff",
    link: this.props.data.link,
    price: this.props.data.price,
    isEditMode: false
  };

  _update = e => {
    let listID = this.props.data._list._id;
    const item = {
      id: this.props.data.id,
      title: this.state.title,
      note: this.state.note,
      link: this.state.link,
      price: this.state.price
    };

    this.props.dispatch(updateItem(listID, item));
    this.setState({
      isEditMode: false
    });
  };

  _delete = e => {
    let listID = this.props.data._list._id;
    let itemID = this.props.data.id;
    console.log("listID:", listID);
    console.log("itemID:", itemID);
    this.props.dispatch(deleteItem(listID, itemID));
  };

  _onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _getUpdate = () => {
    if (this.state.isEditMode) {
      this._update();
    } else {
      this._toggleEditMode();
    }
  };

  _toggleEditMode = () => {
    this.setState({
      isEditMode: true
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="items-container">
        <div
          className="item-content"
          style={{ backgroundColor: this.state.bgcolor }}
        >
          <div className="item-btns">
            <button
              type="button"
              className="btn-item-edit"
              onClick={this._getUpdate}
            >
              {this.state.isEditMode ? "Update" : "Edit"}
            </button>
            {this.state.isEditMode ? (
              <button type="button" className="btn-item" disabled>
                {" "}
                :]{" "}
              </button>
            ) : (
              <button type="button" className="btn-item" onClick={this._delete}>
                Delete
              </button>
            )}
          </div>
          {this.state.isEditMode ? (
            <div className="item-info">
              <input
                className="item-title-input-edit"
                value={this.state.title}
                onChange={this._onChange}
                name="title"
              />
              <input
                className="item-note-input-edit"
                value={this.state.note}
                onChange={this._onChange}
                name="note"
              />
              <input
                className="item-link-input-edit"
                value={this.state.link}
                onChange={this._onChange}
                name="link"
              />
              <input
                className="item-price-input-edit"
                value={this.state.price}
                onChange={this._onChange}
                name="price"
              />
            </div>
          ) : (
            <div className="item-info">
              <h3>
                <a
                  href={this.state.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.state.title}
                </a>
              </h3>
              <h5>{this.state.note}</h5>
              <h5>{this.state.price}</h5>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect()(Item);
