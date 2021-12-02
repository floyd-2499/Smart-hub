import { all } from "redux-saga/effects";
import getListWatcherSaga from "../Pages/FilterReducer/saga";
import getKidsListWatcherSaga from "../Pages/HomePage/kidsfilter/kidsSaga";
import getFavWatcher from "../Pages/Favorites/reducers/saga";

export default function* rootSaga() {
  yield all([
    getListWatcherSaga(),
    getKidsListWatcherSaga(),
    getFavWatcher()
  ]);
}
