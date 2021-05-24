import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH} from "../../tools/tools";
import {UPDATE_STATE} from "../types/categoriesTypes";

export const updateState = (data) => {
    return {
        type: UPDATE_STATE,
        payload: data,
    }
}

export function editCategory(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_PATH + "category", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllCategories());
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

export function addCategory(data) {
    return function (dispatch) {
        console.log(data)
        axios.post(API_PATH + "category", data)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllCategories());
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

export function getAllCategories() {
    return function (dispatch) {
        axios.get(API_PATH + "category")
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


export function deleteCategory(id) {
    console.log("delete keldi!")
    return function (dispatch) {
        axios.delete(API_PATH + "category/" + id)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    dispatch(getAllCategories());
                    dispatch({type: UPDATE_STATE, payload: {deleteModalOpen: false}})
                } else {
                    toast.error("Xatolik!");
                }
            })
    }
}
