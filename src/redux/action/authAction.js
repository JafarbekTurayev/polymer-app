import axios from "axios";
import {toast} from "react-toastify";
import {LOGIN} from "../types/authType";
import {API_PATH, TOKEN_NAME} from "../../tools/tools";


export function loginUser(data, history) {
    return function (dispatch) {
        dispatch({
            type: LOGIN
        })
        axios.post(API_PATH + "auth/login", data)
            .then((res) => {
                console.log(res)
                localStorage.setItem(TOKEN_NAME, res.data.tokenType + " " + res.data.accessToken);
                dispatch({type: LOGIN});
                history.push("/admin/dashboard");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Xatolik!");
                dispatch({type: LOGIN});
            })
    }

}