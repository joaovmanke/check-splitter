import React from "react";

import "./css/Divider.css";

const Divider = props => (
  <div className="divider">
    <span>{props.name}</span>
    <span>${props.amount.toFixed(2)}</span>
  </div>
);

export default Divider;
