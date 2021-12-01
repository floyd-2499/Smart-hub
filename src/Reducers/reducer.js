import { combineReducers } from "redux";
import getList from "../Pages/FilterReducer/reducer";
import getKidsList from "../Pages/FilterReducer/reducer";

const reducers = combineReducers({
    getList,
    getKidsList
})

export default reducers
