import {ADD_PRODUCT_TYPE} from "../types/ptype";

const initialState = {
    modalOpen: false,
    productTypes: [],
    selectedIdForDelete: null,
    selectedProductType: {},
}

export const productTypeReducer = (state = initialState, action) => {
    if (action.type === ADD_PRODUCT_TYPE) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
