import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* getListSaga({ payload, category }) {
    let myFilter = payload.filter((item) => item.category === category);
  yield localStorage.setItem('item-list', JSON.stringify(myFilter));
}

export default function* getListWatcherSaga() {
  yield takeEvery(actionTypes.GET_FILTERED_SUCCESS, getListSaga);
}
