import { combineReducers } from "redux";

import mainValueReducer from "./mainValueReducer";
import savedValueReducer from "./savedValueReducer";
import operationReducer from "./operationReducer";

export default combineReducers({
  mainValue: mainValueReducer,
  savedValue: savedValueReducer,
  operation: operationReducer
});
