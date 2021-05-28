import {UPDATE_STATE} from "../types/categoriesTypes";

const initialState = {
    modalOpen: false,
    categories: [],
    deleteModalOpen: false,
    selectedIdForDelete: null,
    selectedCategory: {},
};
export const categoryReducer = (stete = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return {...stete, ...action.payload};
        default:
            return stete;
    }
};
