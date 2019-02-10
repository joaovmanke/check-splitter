import React from "react";

import Calc from "./Calc";
import Display from "./Display";

import "./css/Header.css";

const Header = () => (
  <div className="header">
    <Calc />
    <Display prefix="$" />
  </div>
);

export default Header;
