import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../../actions/lists";
import "./Item.css";

class Item extends Component {
  state = {
    title: this.props.data.title,
    note: this.props.data.note,
    bgcolor: this.props.data.bgcolor,
    isEditMode: false
  };

  _update = e => {
    let listID = this.props.data._list._id;
    const item = {
      id: this.props.data.id,
      title: this.state.title,
      note: this.state.note
    };

    this.props.dispatch(updateItem(listID, item));
    this.setState({
      isEditMode: false
    });
  };

  _delete = e => {
    let listID = this.props.data._list._id;
    let itemID = this.props.data.id;
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
    return (
      <div
        className="items-container"
        style={{ backgroundColor: this.state.bgcolor }}
      >
        <div className="item-content">
          <div className="item-btns">
            <button
              type="button"
              className="btn-item"
              onClick={this._getUpdate}
            >
              {this.state.isEditMode ? "Update" : "Edit"}
            </button>
            <button type="button" className="btn-item" onClick={this._delete}>
              Delete
            </button>
          </div>
          {this.state.isEditMode ? (
            <div className="item-info">
              <input
                value={this.state.title}
                onChange={this._onChange}
                name="title"
              />
              <input
                value={this.state.note}
                onChange={this._onChange}
                name="note"
              />
            </div>
          ) : (
            <div className="item-info">
              <h3>{this.state.title}</h3>
              <h5>{this.state.note}</h5>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect()(Item);
