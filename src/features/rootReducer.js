import { combineReducers } from "redux";
import userReducer from "./User/user-reducer";
import { persistReducer } from "redux-persist";


const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(rootReducer);
