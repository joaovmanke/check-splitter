import actionNames from "../actions/actionNames";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.ADD_DIVIDER:
      return [...state, payload];

    default:
      return state;
  }
};
