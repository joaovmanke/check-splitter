import React, { Component, createRef } from "react";

import Header from "./Header";
import Util from "./Util";
import CommandBlock from "./CommandBlock";

import "./css/App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { topClear: 0, bottomClear: 0 };
    this.headerRef = createRef();
    this.commandBlockRef = createRef();
  }

  componentDidMount() {
    this.setState({
      topClear: this.headerRef.current.clientHeight,
      bottomClear: this.commandBlockRef.current.clientHeight
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div ref={this.headerRef}>
            <Header />
          </div>
        </div>
        <Util padTop={this.state.topClear} padBottom={this.state.bottomClear} />
        <div className="app__command-block">
          <div ref={this.commandBlockRef}>
            <CommandBlock />
          </div>
        </div>
      </div>
    );
  }
}
