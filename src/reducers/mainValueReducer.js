import actionNames from "../actions/actionNames";

const initialState = "0";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.TYPE:
      if (state === initialState && payload !== ".") {
        return payload;
      }
      return `${state}${payload}`;

    case actionNames.CLEAR:
      return initialState;

    case actionNames.SIGN:
      if (state[0] === "-") {
        return state.slice(1);
      }
      return `-${state}`;

    case actionNames.DELETE:
      if (state.length === 1) {
        return initialState;
      }
      return state.slice(0, -1);

    case actionNames.SET:
      return payload;

    case actionNames.SET_STATE:
      return payload.mainValue;

    default:
      return state;
  }
};
