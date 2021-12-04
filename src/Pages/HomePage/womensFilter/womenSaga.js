import { takeEvery } from "redux-saga/effects";
import {actionTypes} from "./action"

function* getWomenListSaga({ payload, category }) {
  let myList = payload.filter((item) => item.section === "Women");
    let myFilter = myList.filter((item) => item.category === category);
  yield localStorage.setItem('item-list', JSON.stringify(myFilter));
}

export default function* getWomenListWatcherSaga() {
  yield takeEvery(actionTypes.GET_FILTERED_WOMEN_SUCCESS, getWomenListSaga);
}