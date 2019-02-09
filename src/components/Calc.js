import React, { Component } from "react";

import "./Calc.css";

export default class Calc extends Component {
  render() {
    return (
      <div className="calc">
        {/* TODO: Calculator icon */}
        <i />
        <div className="calc__pad">
          <Actions />
          <Numbers />
          <Operations />
        </div>
      </div>
    );
  }
}

// TODO: Class methods and hook up redux
class Actions extends Component {
  clear() {
    return true;
  }

  sign() {
    return true;
  }

  percent() {
    return true;
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
          onClick={() => this.sign()}
        >
          <span>+/-</span>
        </button>
        <button
          className="calc__button calc__button--actions"
          onClick={() => this.percent()}
        >
          <span>%</span>
        </button>
      </div>
    );
  }
}

// TODO: Class method and hook up redux
class Numbers extends Component {
  type(toType) {
    return true;
  }

  render() {
    return (
      <div className="calc__numbers">
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(7)}
        >
          <span>7</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(8)}
        >
          <span>8</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(9)}
        >
          <span>9</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(4)}
        >
          <span>4</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(5)}
        >
          <span>5</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(6)}
        >
          <span>6</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(1)}
        >
          <span>1</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(2)}
        >
          <span>2</span>
        </button>
        <button
          className="calc__button calc__button--numbers"
          onClick={() => this.type(3)}
        >
          <span>3</span>
        </button>
        <button
          className="calc__button calc__button--numbers calc__button--double"
          onClick={() => this.type(0)}
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

// TODO: Class methods and hook up redux
class Operations extends Component {
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
