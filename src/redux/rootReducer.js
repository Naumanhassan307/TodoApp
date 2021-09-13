import {combineReducers} from "redux"
import counterReducer from "./reducers/CounterReducers"
import TodoRed from "./reducers/TodoReducer";
const rootReducer = combineReducers({
  counterReducer,
  TodoRed
});
export default rootReducer;