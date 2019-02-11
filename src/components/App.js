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
        <div className="app__header">
          <div ref={this.headerRef}>
            <Header />
          </div>
        </div>
        <Util padTop={this.state.topClear} />

        {/* FIXME: Uncomment */}
        {/* <CommandBlock /> */}
      </div>
    );
  }
}
