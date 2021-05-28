import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {appReducer} from "./appReducer";
import {categoryReducer} from "./categoryReducer";
import {productsReducer} from "./productsReducer";
import {orderReducer} from "./orderReducer";
import {chartReduser} from "./chartReduser";
import {barChartReduser} from "./barChartReduser";
import {productTypeReducer} from "./productTypeReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    products: productsReducer,
    category: categoryReducer,
    order: orderReducer,
    productType: productTypeReducer,
    chartLine: chartReduser,
    barChart: barChartReduser
});