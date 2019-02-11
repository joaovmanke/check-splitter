import React, { Component } from "react";
import { connect } from "react-redux";

import Divider from "./Divider";
import DividerCreator from "./DividerCreator";

import "./css/Util.css";

class Util extends Component {
  renderDividers() {
    return this.props.dividers.map(({ name, amount, key }) => (
      <Divider key={key} name={name} amount={amount} />
    ));
  }
  render() {
    return (
      <div className="util__wrapper" style={{ paddingTop: this.props.padTop }}>
        <div className="util">
          {this.renderDividers()}
          <DividerCreator />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ dividers }) {
  return { dividers };
}

export default connect(mapStateToProps)(Util);