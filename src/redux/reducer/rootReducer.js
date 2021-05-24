import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    category: categoryReducer
});