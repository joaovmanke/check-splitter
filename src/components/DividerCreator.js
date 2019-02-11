import React, { Component } from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2";

import { newDivider } from "../actions";

import "./css/DividerCreator.css";

class DividerCreator extends Component {
  async promptDividerName() {
    const { value: name } = await Swal.fire({
      input: "text",

      title: "<span style='color: white'>Enter name:</span>",
      background: "var(--DarkGray)",

      confirmButtonText: "Confirm",
      confirmButtonColor: "var(--mainOrange)",

      customClass: "divider-creator__prompt"
    });

    if (name) {
      this.props.newDivider(name);
    }
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
