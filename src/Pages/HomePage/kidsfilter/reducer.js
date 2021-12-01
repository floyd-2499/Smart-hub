import {actionTypes} from "./action";

export const initialState = {
    loading: false,
    items: [],
    error: undefined,
}

const getKidsList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FILTERED_KIDS: 
        return {
            ...state,
            loading: true,
        }
        case actionTypes.GET_FILTERED_KIDS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload
            }
        case actionTypes.GET_FILTERED_KIDS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

            default:
            return state
    }
}

export default getKidsList