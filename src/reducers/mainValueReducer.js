import actionNames from "../actions/actionNames";

export default (state = "0", { type, payload }) => {
  switch (type) {
    case actionNames.TYPE:
      if (state === "0" && payload !== ".") {
        return payload;
      }
      return `${state}${payload}`;

    case actionNames.CLEAR:
      return "0";

    case actionNames.SIGN:
      if (state[0] === "-") {
        return state.slice(1);
      }
      return `-${state}`;

    case actionNames.DELETE:
      if (state.length === 1) {
        return "0";
      }
      return state.slice(0, -1);

    default:
      return state;
  }
};
