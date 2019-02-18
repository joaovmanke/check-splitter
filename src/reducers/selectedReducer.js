import actionNames from "../actions/actionNames";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.SELECT_DIVIDER:
      if (state.find(id => id === payload)) {
        return state.filter(id => id !== payload);
      }
      return [...state, payload];

    case actionNames.REMOVE_SELECTION:
      if (state.find(id => id === payload)) {
        return state.filter(id => id !== payload);
      }
      return state;

    case actionNames.SET_STATE:
      return payload.selected;

    default:
      return state;
  }
};
