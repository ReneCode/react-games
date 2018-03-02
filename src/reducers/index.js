
import { combineReducers } from "redux";
import aliensReducer from "../games/aliens/reducer";

const rootReducer = combineReducers(
  {
    aliens: aliensReducer
  }
)

export default rootReducer;
