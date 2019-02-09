import { combineReducers } from "redux";

import mainValueReducer from "./mainValueReducer";

export default combineReducers({
  mainValue: mainValueReducer
});
