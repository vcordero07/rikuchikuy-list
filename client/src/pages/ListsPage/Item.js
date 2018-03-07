import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../../actions/lists";
import "./Item.css";

class Item extends Component {
  state = {
    title: this.props.data.title,
    note: this.props.data.note,
    bgcolor: this.props.data.bgcolor
  };

  // _update = e => {
  //   console.log("item_update: ", this.state.listID, this.state.itemID);
  //   this.props.dispatch(updateItem(this.state.listID, this.state.itemID));
  // };

  _delete = e => {
    console.log(
      "item_delete: ",
      this.props.data.listID,
      this.props.data.itemID
    );
    this.props.dispatch(
      deleteItem(this.props.data._list._id, this.props.data.id)
    );
  };

  render() {
    return (
      <div
        className="item-container"
        style={{ backgroundColor: this.state.bgcolor }}
      >
        <div>
          <h3>{this.state.title}</h3>
          <h5>{this.state.note}</h5>
          <button type="button" className="btn" onClick={this._update}>
            Edit
          </button>
          <button type="button" className="btn" onClick={this._delete}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Item);
