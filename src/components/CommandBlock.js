import React, { Component } from "react";
import { connect } from "react-redux";

import { splitMainValue } from "../actions";

import "./css/CommandBlock.css";

class CommandBlock extends Component {
  render() {
    return (
      <div className="command-block">
        <button
          className="command-block__button"
          onClick={() => this.props.splitMainValue()}
        >
          <span>Split</span>
        </button>
        <button className="command-block__button">
          <span>Merge</span>
        </button>
        <button className="command-block__button">
          <span>Delete</span>
        </button>
        <button className="command-block__button">
          <span>Undo</span>
        </button>
        <button className="command-block__button">
          <span>Copy</span>
        </button>
        <button className="command-block__button">
          <span>Distribute</span>
        </button>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { splitMainValue }
)(CommandBlock);
