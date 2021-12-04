import { combineReducers } from "redux";
import getList from "../Pages/FilterReducer/reducer";
import getKidsList from "../Pages/FilterReducer/reducer";
import getFavList from "../Pages/Favorites/reducers/reducer";
import getWomenList from "../Pages/HomePage/womensFilter/reducer";

const reducers = combineReducers({
    getList,
    getKidsList,
    getFavList,
    getWomenList
})

export default reducers
