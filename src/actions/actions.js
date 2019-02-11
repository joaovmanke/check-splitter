import uniqid from "uniqid";

import actionNames from "./actionNames";

export function typeDigit(digit) {
  return {
    type: actionNames.TYPE,
    payload: digit
  };
}

export function clearDigits() {
  return {
    type: actionNames.CLEAR,
    payload: null
  };
}

export function changeSign() {
  return {
    type: actionNames.SIGN,
    payload: null
  };
}

export function deleteDigit() {
  return {
    type: actionNames.DELETE,
    payload: null
  };
}

export function setDigits(digits) {
  return {
    type: actionNames.SET,
    payload: digits
  };
}

export function newDivider(name) {
  return {
    type: actionNames.ADD_DIVIDER,
    payload: { name, amount: 0, id: uniqid() }
  };
}

export function toggleSelectionDivider(id) {
  return {
    type: actionNames.SELECT_DIVIDER,
    payload: id
  };
}
