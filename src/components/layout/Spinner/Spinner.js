import React from "react";
import spinner from "./spinner.svg";
import "./Spinner.css";

export default function Spinner(props) {
  return (
    <div className="spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
}
