/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";
import { all, fork, takeLatest, call, put } from "typed-redux-saga";
import {
  LOAD_RESERVATION_ERROR,
  LOAD_RESERVATION_REQUEST,
} from "@/action/reservationAction";

function loadReservationAPI() {
  return axios.get("/");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function* loadReservation(action: any) {
  try {
    const results = yield* call(loadReservationAPI);
    yield put({
      type: LOAD_RESERVATION_REQUEST,
      data: results.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_RESERVATION_ERROR,
      data: error.response.data,
    });
  }
}

function* loadReservationSaga() {
  yield takeLatest(LOAD_RESERVATION_REQUEST, loadReservation);
}

function* reservationSaga() {
  yield all([fork(loadReservationSaga)]);
}

export default reservationSaga;
