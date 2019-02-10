import actionNames from "../actions/actionNames";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.CLEAR:
    case actionNames.CLEAR_SAVED:
      return initialState;

    case actionNames.SAVE:
      return payload;

    default:
      return state;
  }
};
