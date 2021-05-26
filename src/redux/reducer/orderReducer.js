import {Order} from "../types/orderType";
import {UPDATE_STATE} from "../types/updateState";

const initialState = {
    isLoading: false,
    modalOpen: false,
    selectedOrder: {},
    products: [],


};



export const orderReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_STATE:
            return {...state, isLoading: !state.isLoading, ...action.payload};


        default: return state;
    }
};