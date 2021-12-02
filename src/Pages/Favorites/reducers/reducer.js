import { actionTypes } from "./action";

export const initialState = {
  loading: false,
  items: [],
  error: undefined,
};

const getFavList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FAVORITE:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case actionTypes.GET_FAVORITE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getFavList
