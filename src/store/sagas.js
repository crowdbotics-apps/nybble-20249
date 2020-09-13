import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* newconnector_get_s_133a96d0_podcast_rss_listWorker(action) {
  try {
    const result = yield call(
      apiService.newconnector_get_s_133a96d0_podcast_rss_list,
      action
    )
    yield put(
      actions.newconnector_get_s_133a96d0_podcast_rss_listSucceeded(result)
    )
  } catch (err) {
    yield put(actions.newconnector_get_s_133a96d0_podcast_rss_listFailed(err))
  }
}
function* newconnector_get_s_133a96d0_podcast_rss_listWatcher() {
  yield takeEvery(
    types.NEWCONNECTOR_GET_S_133A96D0_PODCAST_RSS_LIST,
    newconnector_get_s_133a96d0_podcast_rss_listWorker
  )
}
function* newconnector_get_s_1344bae8_podcast_rss_listWorker(action) {
  try {
    const result = yield call(
      apiService.newconnector_get_s_1344bae8_podcast_rss_list,
      action
    )
    yield put(
      actions.newconnector_get_s_1344bae8_podcast_rss_listSucceeded(result)
    )
  } catch (err) {
    yield put(actions.newconnector_get_s_1344bae8_podcast_rss_listFailed(err))
  }
}
function* newconnector_get_s_1344bae8_podcast_rss_listWatcher() {
  yield takeEvery(
    types.NEWCONNECTOR_GET_S_1344BAE8_PODCAST_RSS_LIST,
    newconnector_get_s_1344bae8_podcast_rss_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    newconnector_get_s_133a96d0_podcast_rss_listWatcher,
    newconnector_get_s_1344bae8_podcast_rss_listWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
