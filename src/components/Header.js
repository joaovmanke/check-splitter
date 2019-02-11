import React, { Component } from "react";

import Calc from "./Calc";
import Display from "./Display";

import "./css/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Calc />
        <Display prefix="$" />
      </div>
    );
  }
}

export default Header;
