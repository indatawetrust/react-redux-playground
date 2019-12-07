import { fork, put, delay, select, take, cancel } from "redux-saga/effects";
import { Types, Creators } from "../reducers";

export function* toggle() {
  let pingTask = null;

  while (true) {
    yield take(Types.TOGGLE_STATUS);

    const { stage } = yield select(state => state.app);

    if (stage) {
      pingTask = yield fork(ping);

      yield put(Creators.ping());
    } else {
      yield cancel(pingTask);
    }
  }
}

export function* ping() {
  while (true) {
    yield take(Types.PING);

    yield fork(pong);

    const { delayTime } = yield select(state => state.app);

    yield delay(delayTime);

    yield put(Creators.pong());
  }
}

export function* pong() {
  while (true) {
    yield take(Types.PONG);

    const { delayTime } = yield select(state => state.app);

    yield delay(delayTime);

    yield put(Creators.ping());
  }
}

export default function* root() {
  yield fork(toggle);
}
