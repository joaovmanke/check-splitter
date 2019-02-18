import uniqid from "uniqid";
import { EventEmitter } from "fbemitter";

import actionNames, { emitterActionNames } from "./actionNames";

const appEmitter = new EventEmitter();

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

export function removeDivider(id) {
  return {
    type: actionNames.REMOVE_DIVIDER,
    payload: id
  };
}

export function addToDivider(id, amount) {
  return {
    type: actionNames.ADD_TO_DIVIDER,
    payload: { id, amount }
  };
}

export function toggleSelectionDivider(id) {
  return {
    type: actionNames.SELECT_DIVIDER,
    payload: id
  };
}

export function removeSelectionDivider(id) {
  return {
    type: actionNames.REMOVE_SELECTION,
    payload: id
  };
}

export function splitMainValue() {
  return (dispatch, getState) => {
    const { mainValue, selected } = getState();
    const splitValue =
      Math.round((100 * Number(mainValue)) / selected.length) / 100;
    selected.forEach(id => dispatch(addToDivider(id, splitValue)));
    appEmitter.emit(emitterActionNames.CLEAR_CALC);
  };
}

export function mergeDividers() {
  return (dispatch, getState) => {
    let { selected, dividers } = getState();
    selected = [...selected];
    const firstSelected = selected.shift();
    selected.forEach(id => {
      dispatch(
        addToDivider(
          firstSelected,
          dividers.find(divider => divider.id === id).amount
        )
      );
      dispatch(toggleSelectionDivider(id));
      dispatch(removeDivider(id));
    });
  };
}

export function deleteSelected() {
  return (dispatch, getState) => {
    const { selected } = getState();
    selected.forEach(id => {
      dispatch(removeSelectionDivider(id));
      dispatch(removeDivider(id));
    });
  };
}

export function subscribeTo(actionName, toRun) {
  appEmitter.addListener(actionName, toRun);
}
