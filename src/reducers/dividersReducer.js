import actionNames from "../actions/actionNames";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.ADD_DIVIDER:
      return [...state, payload];

    case actionNames.REMOVE_DIVIDER:
      return state.filter(divider => divider.id !== payload);

    case actionNames.ADD_TO_DIVIDER:
      const newState = [...state];
      const { id, amount } = payload;
      newState[
        newState.findIndex(divider => divider.id === id)
      ].amount += amount;
      return newState;

    case actionNames.SET_STATE:
      return payload.dividers;

    default:
      return state;
  }
};
