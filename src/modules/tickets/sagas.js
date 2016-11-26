import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { actions, types } from 'modules/tickets'
import api from 'api'

function* fetchTickets(action) {
  try {
    const response = yield call(api.fetchTickets, {})
    yield put(actions.fetchTicketsSuccess(response))
  } catch (e) {
    yield put(actions.fetchTicketsFailure(e))
  }
}

export default function* watcher() {
  yield [
    takeEvery(types.FETCH_TICKETS_REQUEST, fetchTickets),
  ]
}
