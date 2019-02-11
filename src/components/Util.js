import React, { Component } from "react";
import { connect } from "react-redux";

import Divider from "./Divider";

class Util extends Component {
  render() {
    return (
      <div className="util">
        <Divider />
      </div>
    );
  }
}

export default connect(() => ({}))(Util);
