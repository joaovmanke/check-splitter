import React, { Component } from "react";
import { connect } from "react-redux";

import {
  typeDigit,
  clearDigits,
  changeSign,
  deleteDigit,
  setDigits
} from "../actions";

import "./Calc.css";

class Calc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.savedValue = null;
    this.operation = null;
  }

  showHide() {
    if (this.state.visible) {
      this.setState({ visible: false });
    } else {
      this.setState({ visible: true });
    }
  }

  calculate() {
    return this.operation(this.savedValue, this.props.mainValue);
  }

  setOperation(operation) {
    if (this.operation) {
      this.savedValue = this.calculate();
    } else {
      this.savedValue = this.props.mainValue;
    }
    this.operation = operation;
    this.props.clearDigits();
  }

  resolve() {
    if (this.operation) {
      this.props.setDigits(
        (Math.round(this.calculate() * 100) / 100).toString()
      );
      this.savedValue = null;
      this.operation = null;
    }
  }

  clear() {
    this.props.clearDigits();
    this.savedValue = null;
    this.operation = null;
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
            <Actions
              clear={() => this.clear()}
              back={() => this.props.deleteDigit()}
              sign={() => this.props.changeSign()}
            />
            <Numbers typeDigit={d => this.props.typeDigit(d)} />
            <Operations
              set={o => this.setOperation(o)}
              resolve={() => this.resolve()}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ mainValue }) {
  return { mainValue: Number(mainValue) };
}

export default connect(
  mapStateToProps,
  { typeDigit, clearDigits, deleteDigit, changeSign, setDigits }
)(Calc);

const Actions = ({ clear, back, sign }) => (
  <div className="calc__actions">
    <button
      className="calc__button calc__button--actions"
      onClick={() => clear()}
    >
      <span>C</span>
    </button>
    <button
      className="calc__button calc__button--actions"
      onClick={() => back()}
    >
      <span>{"<-"}</span>
    </button>
    <button
      className="calc__button calc__button--actions"
      onClick={() => sign()}
    >
      <span>+/-</span>
    </button>
  </div>
);

const Numbers = ({ typeDigit }) => (
  <div className="calc__numbers">
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("7")}
    >
      <span>7</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("8")}
    >
      <span>8</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("9")}
    >
      <span>9</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("4")}
    >
      <span>4</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("5")}
    >
      <span>5</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("6")}
    >
      <span>6</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("1")}
    >
      <span>1</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("2")}
    >
      <span>2</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit("3")}
    >
      <span>3</span>
    </button>
    <button
      className="calc__button calc__button--numbers calc__button--double"
      onClick={() => typeDigit("0")}
    >
      <span>0</span>
    </button>
    <button
      className="calc__button calc__button--numbers"
      onClick={() => typeDigit(".")}
    >
      <span>.</span>
    </button>
  </div>
);

const Operations = ({ set, resolve }) => (
  <div className="calc__operations">
    <button
      className="calc__button calc__button--operations"
      onClick={() => set((a, b) => a / b)}
    >
      <span>/</span>
    </button>
    <button
      className="calc__button calc__button--operations"
      onClick={() => set((a, b) => a * b)}
    >
      <span>*</span>
    </button>
    <button
      className="calc__button calc__button--operations"
      onClick={() => set((a, b) => a - b)}
    >
      <span>-</span>
    </button>
    <button
      className="calc__button calc__button--operations"
      onClick={() => set((a, b) => a + b)}
    >
      <span>+</span>
    </button>
    <button
      className="calc__button calc__button--operations"
      onClick={() => resolve()}
    >
      <span>=</span>
    </button>
  </div>
);
