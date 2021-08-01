/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { fork, all } from "@redux-saga/core/effects";
import reservationSaga from "@/sagas/reservationSaga";

export default function* rootSaga() {
  yield all([fork(reservationSaga)]);
}
