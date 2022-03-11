import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { viewReducer } from "./viewReducer";

const reducer = combineReducers(
    {
        user: userReducer,
        view: viewReducer
    }
)

export { reducer };