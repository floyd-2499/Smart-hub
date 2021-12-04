import { actionTypes } from "./action";

export const initialState = {
  loading: false,
  items: [],
  error: undefined,
};

const getWomenList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FILTERED_WOMEN_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default getWomenList;
