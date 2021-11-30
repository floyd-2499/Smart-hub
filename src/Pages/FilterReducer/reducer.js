import { actionTypes } from "./action";

export const initialState = {
    loading: false,
    items: [],
    error: undefined,
}

const getList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FILTERED:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.GET_FILTERED_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case actionTypes.GET_FILTERED_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            default:
            return state
    }
}

export default getList
