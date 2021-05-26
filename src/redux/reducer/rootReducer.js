import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";
import {productsReducer} from "./productsReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    category: categoryReducer,
    products: productsReducer
});