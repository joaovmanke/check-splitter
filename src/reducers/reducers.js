import { combineReducers } from "redux";

import mainValueReducer from "./mainValueReducer";
import dividersReducer from "./dividersReducer";
import selectedReducer from "./selectedReducer";
import historyReducer from "./historyReducer";

export default combineReducers({
  mainValue: mainValueReducer,
  dividers: dividersReducer,
  selected: selectedReducer,
  history: historyReducer
});
