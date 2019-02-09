import actionNames from "../actions/actionNames";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.CLEAR:
      return initialState;

    case actionNames.SAVE:
      return payload;

    default:
      return state;
  }
};
