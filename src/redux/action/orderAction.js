import axios from "axios";
import {toast} from "react-toastify";
import {Order} from "../types/orderType";
import {API_PATH, TOKEN_NAME} from "../../tools/tools";
import {UPDATE_STATE} from "../types/updateState";

export const updateState = (data) => {
    return {
        type: UPDATE_STATE,
        payload: data,
    }
}

export function addOrder(data) {
    return function (dispatch) {
        dispatch({
            type: Order
        });
        let token = localStorage.getItem(TOKEN_NAME);
        axios.post(API_PATH + "userOrder",
            data,
            {
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': token
                },
            })
            .then((res) => {
                console.log(res);
                dispatch({type: Order});
                toast.success(res.status);
                dispatch(updateState({modalOpen: false, selectedOrder: {}}))


            })
            .catch((error) => {
                console.log(error);
                toast.error("Xatolik!");
                dispatch({type: Order});
            })
    }

}

export function editOrder(data) {
    return function (dispatch) {
        dispatch({
            type: Order
        });
        axios.put(API_PATH + "userOrder/" + data.id, data)
            .then((res) => {
                console.log(res);
                dispatch({type: Order});
                toast.success(res.status);
                dispatch(updateState({modalOpen: false}))

            })
            .catch((error) => {
                console.log(error);
                toast.error("Xatolik!");
                dispatch({type: Order});
            })
    }

}



