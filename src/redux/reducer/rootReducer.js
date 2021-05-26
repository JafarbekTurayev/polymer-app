import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";
import {marketingReducer} from "./marketingReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    category: categoryReducer,
    marketings: marketingReducer
});