import {ADD_PRODUCTS} from "../types/productsTypes";


const initialState = {
    modalOpen: false,
    products: [],
    selectedIdForDelete: null,
    selectedProduct: {},
    photosId: [],
    selectedImage: 0
}

export const productsReducer = (state = initialState, action) => {
    if (action.type === ADD_PRODUCTS) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}