import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./action";

function* getKidsListSaga({ payload, category }) {
  let myList = payload.filter((item) => item.section === "Kids");
    let myFilter = myList.filter((item) => item.category === category);
  yield localStorage.setItem('item-list', JSON.stringify(myFilter));
}

export default function* getKidsListWatcherSaga() {
  yield takeEvery(actionTypes.GET_FILTERED_KIDS_SUCCESS, getKidsListSaga);
}
