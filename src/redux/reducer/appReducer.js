const initialState = {
    pageLoading: true,
    modalOpenHome: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {
                ...state, ...action.payload
            }

        default:
            return state;
    }
}

export const updateStateApp = (data) => {
    return {
        type: "UPDATE_STATE",
        payload: data,
    }
}