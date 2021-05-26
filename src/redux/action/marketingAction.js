import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH} from "../../tools/tools";
import {UPDATE_STATE} from "../types/marketingType";

export const updateState = (data) => {
    return {
        type: UPDATE_STATE,
        payload: data,
    }
};

export function editMarketing(data) {
    return function (dispatch) {
        console.log(data);
        axios.post(API_PATH + "marketing", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMarketings());
                    dispatch({
                        type: UPDATE_STATE,
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

export function addMarketing(data) {
    return function (dispatch) {
        console.log(data);
        axios.post(API_PATH + "marketing", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMarketings());
                    dispatch({
                        type: UPDATE_STATE,
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

export function getAllMarketings() {
    return function (dispatch) {
        axios.get(API_PATH + "marketing")
            .then((res) => {
                dispatch(updateState({menus: res.data.data}))
                // dispatch({
                //     type: "CHANGE_LOADING",
                //     payload: {
                //         pageLoading: false
                //     }
                // })
            })
    }
}


export function deleteMarketing(id) {
    console.log("delete keldi!");
    return function (dispatch) {
        axios.delete(API_PATH + "category/" + id)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMarketings());
                    dispatch({type: UPDATE_STATE, payload: {deleteModalOpen: false}})
                } else {
                    toast.error("Xatolik!");
                }
            })
    }
}