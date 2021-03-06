import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";
import {productsReducer} from "./productsReducer";
import {orderReducer} from "./orderReducer";
import {marketingReducer} from "./marketingReducer";
import {chartReduser} from "./chartReduser";
import {barChartReduser} from "./barChartReduser";
import {productTypeReducer} from "./productTypeReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    products: productsReducer,
    category: categoryReducer,
    order: orderReducer,
    marketings: marketingReducer,
    productType: productTypeReducer,
    chartLine: chartReduser,
    barChart: barChartReduser
});