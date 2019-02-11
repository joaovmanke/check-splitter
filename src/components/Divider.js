import React from "react";
import { connect } from "react-redux";

import { toggleSelectionDivider } from "../actions";

import "./css/Divider.css";

const Divider = props => (
  <div
    className={`divider${props.selected ? " divider--selected" : ""}`}
    onClick={() => props.toggleSelectionDivider(props.id)}
  >
    <span>{props.name}</span>
    <span>${props.amount.toFixed(2)}</span>
  </div>
);

function mapStateToProps({ dividers, selected }, { id }) {
  const { name, amount } = dividers.find(divider => divider.id === id);
  return {
    name,
    amount,
    selected: selected.findIndex(selectedId => selectedId === id) !== -1
  };
}

export default connect(
  mapStateToProps,
  { toggleSelectionDivider }
)(Divider);
