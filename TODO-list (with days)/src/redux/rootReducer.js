import { combineReducers } from "redux";

import appReducer from "./reducers/appReducer";
import addTodoReducer from "./reducers/addTodoReducer";

export default combineReducers({
  app: appReducer,
  addTodoOpen: addTodoReducer,
});
