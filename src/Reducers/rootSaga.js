import {all} from "redux-saga/effects";
import getListWatcherSaga from "../Pages/FilterReducer/saga";

export default function* rootSaga() {
    yield all([getListWatcherSaga()])
}