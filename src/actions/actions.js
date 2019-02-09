import actionNames from "./actionNames";

export function typeDigit(digit) {
  return {
    type: actionNames.TYPE,
    payload: digit
  };
}
