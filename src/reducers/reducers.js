import { combineReducers } from "redux";

import mainValueReducer from "./mainValueReducer";
import dividersReducer from "./dividersReducer";

export default combineReducers({
  mainValue: mainValueReducer,
  dividers: dividersReducer
});
