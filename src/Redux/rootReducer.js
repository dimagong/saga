import { combineReducers } from "redux"
import { postReducer } from "./postReducer"
import { appReducer } from "./appReducer"
import { errorReducer } from "./errorReduser"

export const rootReducer = combineReducers({
    post: postReducer,
    app: appReducer,
    error: errorReducer,
});