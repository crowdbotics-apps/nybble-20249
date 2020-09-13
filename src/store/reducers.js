import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEWCONNECTOR_GET_S_133A96D0_PODCAST_RSS_LIST:
    case types.NEWCONNECTOR_GET_S_133A96D0_PODCAST_RSS_LIST_SUCCEEDED:
    case types.NEWCONNECTOR_GET_S_133A96D0_PODCAST_RSS_LIST_FAILED:
    case types.NEWCONNECTOR_GET_S_1344BAE8_PODCAST_RSS_LIST:
    case types.NEWCONNECTOR_GET_S_1344BAE8_PODCAST_RSS_LIST_SUCCEEDED:
    case types.NEWCONNECTOR_GET_S_1344BAE8_PODCAST_RSS_LIST_FAILED:
    default:
      return state
  }
}
