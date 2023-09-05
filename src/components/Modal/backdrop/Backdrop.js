import React from "react";
// import "./Backdrop.css"

const Backdrop = (props) =>
  props.show ? (
    <div className="backdrop-content" onClick={props.modalClosed}></div>
  ) : null;

export default Backdrop;
