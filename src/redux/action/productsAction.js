import {ADD_PRODUCTS} from "../types/productsTypes";
import {productsReducer} from "../reducer/productsReducer";
import axios from "axios";
import {API_PATH} from "../../tools/tools";
import {toast} from "react-toastify";
import {UPDATE_STATE} from "../types/categoriesTypes";
import {getAllCategories} from "./categoryAction";
import {tokenHeader} from "../../tools/tools";

export const updateState  = (data) =>{
    return{
        type: ADD_PRODUCTS,
        payload: data
    }
}
export function editProduct(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_PATH + "menu", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllProduct());
                    dispatch({
                        type: ADD_PRODUCTS,
                        payload: {
                            modalOpen: false
                        }
                    })
                } else {
                    toast.error(res.data.message);
                }
            })
    }
}


export function addProduct(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_PATH + "product", data, tokenHeader)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllProduct());
                    dispatch({
                        type: ADD_PRODUCTS,
                        payload: {
                            modalOpen: false
                        }
                    })
                } else {
                    toast.error(res.data.message);
                }
            })
    }
}




export function getAllProduct() {
    return function (dispatch) {
        axios.get(API_PATH + "product", tokenHeader)
            .then((res) => {
                console.log(res)
                dispatch(updateState({products: res.data.data}))
            })
    }
}

