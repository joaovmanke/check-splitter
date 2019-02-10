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

export function resolveOperation() {
  return async (dispatch, getState) => {
    const { savedValue, operation } = getState();

    if (operation) {
      await dispatch({
        type: actionNames.RESOLVE,
        payload: {
          savedValue,
          operation
        }
      });

      dispatch({
        type: actionNames.CLEAR_SAVED,
        payload: null
      });

      dispatch({
        type: actionNames.CLEAR_OPERATOR,
        payload: null
      });
    }
  };
}

export function setOperator(operator) {
  return async (dispatch, getState) => {
    const { savedValue } = getState();

    if (savedValue) {
      await dispatch(resolveOperation());
    }

    const { mainValue } = getState();

    dispatch({
      type: actionNames.SAVE,
      payload: Number(mainValue)
    });

    dispatch({
      type: actionNames.NEW_OPERATOR,
      payload: operator
    });

    dispatch({
      type: actionNames.CLEAR_MAIN,
      payload: null
    });
  };
}
