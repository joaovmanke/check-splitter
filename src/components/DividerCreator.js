import React, { Component } from "react";
import { connect } from "react-redux";

import { newDivider } from "../actions";

import "./css/DividerCreator.css";

class DividerCreator extends Component {
  promptDividerName() {
    this.props.newDivider("John");
  }
  render() {
    return (
      <div className="divider-creator" onClick={() => this.promptDividerName()}>
        <strong>+</strong>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { newDivider }
)(DividerCreator);
