import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";
import {productsReducer} from "./productsReducer";
import {orderReducer} from "./orderReducer";
import {marketingReducer} from "./marketingReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    products: productsReducer,
    category: categoryReducer,
    order: orderReducer,
    marketings: marketingReducer,
    productType: productsReducer,
});