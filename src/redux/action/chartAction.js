import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/tools";


export const chartSubmit =(events, errors, values)=>{

    let token = localStorage.getItem(TOKEN_NAME);
    axios.post(API_PATH + "report",
        values,
        {
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': token
            },
        })
        .then(res=>{
            console.log(res)
        })
}



