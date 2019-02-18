import actionNames from "../actions/actionNames";

const maxHistory = 5;
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionNames.PUSH_STATE:
      return [payload, ...state.slice(0, maxHistory - 1)];

    case actionNames.POP_STATE:
      return state.slice(1, maxHistory);

    default:
      return state;
  }
};
