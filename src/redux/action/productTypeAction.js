import axios from "axios";
import {API_PATH} from "../../tools/tools";
import {toast} from "react-toastify";
import {ADD_PRODUCT_TYPE, UPDATE_STATE_PT} from "../types/ptype";


export const updateState = (data) => {
    console.log(data);
    return {
        type: UPDATE_STATE_PT,
        payload: data,
    }
}


export function addProductType(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_PATH + "productType", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    // dispatch(getAllProduct());
                    dispatch({
                        type: ADD_PRODUCT_TYPE,
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


