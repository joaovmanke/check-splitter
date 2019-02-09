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

    default:
      return state;
  }
};
