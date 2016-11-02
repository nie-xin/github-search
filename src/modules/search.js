import { getRepositories } from './repositories'

// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_CHANGE = 'SEARCH_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export const searchChange = (keyword) => ({
  type: SEARCH_CHANGE,
  payload: keyword
})

export const searchSubmit = () => (dispatch, getState) => {
  const { search } = getState()

  if (search) {
    dispatch(getRepositories(search))
  }
}

export const actions = {
  searchChange,
  searchSubmit
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_CHANGE]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ''
export default function searchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
