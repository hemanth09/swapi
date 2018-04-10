import { combineReducers } from "redux";
import search from "./searchReducer";
import filter from "./filterReducer";

export default combineReducers({
  search,
  filter
});
