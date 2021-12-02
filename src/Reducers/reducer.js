import { combineReducers } from "redux";
import getList from "../Pages/FilterReducer/reducer";
import getKidsList from "../Pages/FilterReducer/reducer";
import getFavList from "../Pages/Favorites/reducers/reducer";

const reducers = combineReducers({
    getList,
    getKidsList,
    getFavList
})

export default reducers
