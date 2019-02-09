import React, { Component } from "react";
import { connect } from "react-redux";

import { typeDigit, clearDigits, changeSign, deleteDigit } from "../actions";

import "./Calc.css";

export default class Calc extends Component {
  state = {
    visible: false
  };

  showHide() {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }

  render() {
    return (
      <div className="calc">
        <i
          className="calc__icon large calculator icon"
          onClick={() => this.showHide()}
        />
        {this.state.visible ? (
          <div className="calc__pad">
            <Actions />
            <Numbers />
            <Operations />
          </div>
        ) : null}
      </div>
    );
  }
}

class _Actions extends Component {
  clear() {
    this.props.clearDigits();
  }

  back() {
    this.props.deleteDigit();
  }

  sign() {
    this.props.changeSign();
  }

  render() {
    return (
      <div className="calc__actions">
        <button
          className="calc__button calc__button--actions"
          onClick={() => this.clear()}
        >
          <span>C</span>
        </button>
        <button
          className="calc__button calc__button--actions"
          onClick={() => this.back()}
        >
          <span>{"<-"}</span>
        </button>
        <button
          className="calc__button calc__button--actions"
          onClick={() => this.sign()}
        >
          <span>+/-</span>
        </button>
      </div>
    );
  }
}

const Actions = connect(
  () => ({}),
  { clearDigits, changeSign, deleteDigit }
)(_Actions);

class _Numbers extends Component {
  type(toType) {
    this.props.typeDigit(toType);
  }

  render() {
    return (
      <div className="calc__numbers">
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("7")}
        >
          <span>7</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("8")}
        >
          <span>8</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("9")}
        >
          <span>9</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("4")}
        >
          <span>4</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("5")}
        >
          <span>5</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("6")}
        >
          <span>6</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("1")}
        >
          <span>1</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("2")}
        >
          <span>2</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type("3")}
        >
          <span>3</span>
        </button>
        <button
          className="calc__button calc__button--numbers calc__button--double"
          onClick={() => this.type("0")}
        >
          <span>0</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(".")}
        >
          <span>.</span>
        </button>
      </div>
    );
  }
}

const Numbers = connect(
  () => ({}),
  {
    typeDigit
  }
)(_Numbers);

// TODO: Class methods
class _Operations extends Component {
  divide() {
    return true;
  }

  product() {
    return true;
  }

  subtract() {
    return true;
  }

  add() {
    return true;
  }

  resolve() {
    return true;
  }

  render() {
    return (
      <div className="calc__operations">
        <button
          className="calc__button calc__button--operations"
          onClick={() => this.divide()}
        >
          <span>/</span>
        </button>
        <button
          className="calc__button calc__button--operations"
          onClick={() => this.product()}
        >
          <span>*</span>
        </button>
        <button
          className="calc__button calc__button--operations"
          onClick={() => this.subtract()}
        >
          <span>-</span>
        </button>
        <button
          className="calc__button calc__button--operations"
          onClick={() => this.add()}
        >
          <span>+</span>
        </button>
        <button
          className="calc__button calc__button--operations"
          onClick={() => this.resolve()}
        >
          <span>=</span>
        </button>
      </div>
    );
  }
}

const Operations = connect()(_Operations);
