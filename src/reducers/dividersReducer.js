import actionNames from "../actions/actionNames";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.ADD_DIVIDER:
      return [...state, payload];

    case actionNames.ADD_TO_DIVIDER:
      const newState = [...state];
      const { id, amount } = payload;
      newState[
        newState.findIndex(divider => divider.id === id)
      ].amount += amount;
      return newState;
    default:
      return state;
  }
};
