import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* getListSaga({ payload, category }) {
  let myList = payload.filter((item) => item.section === "Men");
    let myFilter = myList.filter((item) => item.category === category);
  yield localStorage.setItem('item-list', JSON.stringify(myFilter));
}

export default function* getListWatcherSaga() {
  yield takeEvery(actionTypes.GET_FILTERED_SUCCESS, getListSaga);
}
