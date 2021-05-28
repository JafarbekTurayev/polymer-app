import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH, TOKEN_NAME} from "../../tools/tools";
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.post(API_PATH + "marketing", data,
            {
                headers: {
                    'Authorization': token
                },
            })
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.post(API_PATH + "marketing", data, {
            headers: {
                'Authorization': token
            },
        })
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

        //API_PATH + "category?page=" + page + "&size=" + size + "&searchName" + name
        let token = localStorage.getItem(TOKEN_NAME);
        axios.get(API_PATH + "marketing/all", {
            headers: {'Authorization': token},
        })
            .then((res) => {
                console.log(res);
                dispatch(updateState({marketing: res.data}))
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.delete(API_PATH + "marketing/" + id,
            {headers: {'Authorization': token},})
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllMarketings());
                    dispatch({type: UPDATE_STATE, payload: {deleteModalOpen: false}})
                } else {
                    toast.error("Xatolik!");
                }
            })
    }}