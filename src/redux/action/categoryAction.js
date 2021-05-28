import axios from "axios";
import {toast} from "react-toastify";
import {API_PATH, TOKEN_NAME} from "../../tools/tools";
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.post(API_PATH + "category", data,
            {
                headers: {'Authorization': token},
            })
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.post(API_PATH + "category", data, {
            headers: {
                'Authorization': token
            },
        })
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
        let page = 0;
        let size = 10;
        let name = "new"
        //API_PATH + "category?page=" + page + "&size=" + size + "&searchName" + name
        let token = localStorage.getItem(TOKEN_NAME);
        axios.get(API_PATH + "category/all", {
            headers: {'Authorization': token},
        })
            .then((res) => {
                console.log(res)
                dispatch(updateState({categories: res.data}))
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
        let token = localStorage.getItem(TOKEN_NAME);
        axios.delete(API_PATH + "category/" + id,
            {headers: {'Authorization': token},})
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

