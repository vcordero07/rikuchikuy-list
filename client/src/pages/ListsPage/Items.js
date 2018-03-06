import React from "react";
import { connect } from "react-redux";
import "./Items.css";

export function Items(props) {
  return (
    <div className="items-container">
      <div>
        <h3>{props.title}</h3>
        <h5>{props.note}</h5>
      </div>
    </div>
  );
}

export default connect()(Items);
