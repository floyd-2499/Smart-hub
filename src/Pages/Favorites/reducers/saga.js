import { takeEvery } from "@redux-saga/core/effects";
import { actionTypes } from "./action";

function* getFavListSaga({ payload }) {
  const oldItems = JSON.parse(localStorage.getItem("list-item"));

  let favItems = [];
  if (oldItems) {
    favItems.push(...oldItems);
    if (!oldItems.find((item) => item.id === payload.id)) {
        favItems.push(payload);
    }
  } else {
    favItems.push(payload);
  }

  yield localStorage.setItem("list-item", JSON.stringify(favItems));
}

export default function* getFavWatcher() {
  yield takeEvery(actionTypes.GET_FAVORITE_SUCCESS, getFavListSaga);
}
