import React from "react";
import { connect } from "react-redux";

import "./css/Display.css";

function Display(props) {
  return (
    <div className="display">
      <span className="display__prefix">{props.prefix}</span>
      <span className="display__main">{props.mainValue}</span>
    </div>
  );
}

function mapStateToProps({ mainValue }) {
  return { mainValue };
}

export default connect(mapStateToProps)(Display);
