import {UPDATE_STATE} from "../types/marketingType";

const initialState = {
    modalOpen: false,
    marketing: [],
    deleteModalOpen: false,
    selectedIdForDelete: null,
    selectedMarketing: {},
};
export const marketingReducer = (stete = initialState, action) => {
    console.log("ishladi");
    switch (action.type) {
        case UPDATE_STATE:
            return {...stete, ...action.payload};
        default:
            return stete;
    }
};
