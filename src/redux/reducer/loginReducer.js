import {LOGIN} from "../types/authType";

const initialState = {
    isLoading: false,
    modalOpen: true,
    menu: {id: 1, name: "Jafar"}

};

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN:
            return {...state, isLoading: !state.isLoading}
            break;

        default:
            return state;
    }
};