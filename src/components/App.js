import React, { Component, createRef } from "react";

import Header from "./Header";
import Util from "./Util";

import "./css/App.css";

// FIXME: Uncomment
// import CommandBlock from "./CommandBlock";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { topClear: 0 };
    this.headerRef = createRef();
  }

  componentDidMount() {
    this.setState({ topClear: this.headerRef.current.clientHeight });
  }

  render() {
    return (
      <div className="app">
        <div style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
          <div ref={this.headerRef}>
            <Header />
          </div>
        </div>
        <div style={{ paddingTop: this.state.topClear }}>
          <Util />
        </div>

        {/* FIXME: Uncomment */}
        {/* <CommandBlock /> */}
      </div>
    );
  }
}
