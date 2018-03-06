import React from "react";
import { connect } from "react-redux";
import "./Item.css";

export function Item(props) {
  return (
    <div className="item-container">
      <div>
        <h3>{props.Title}</h3>
        <h5>{props.Note}</h5>
        <button type="button" className="btn">
          Edit
        </button>
        <button type="button" className="btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default connect()(Item);
