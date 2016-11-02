import apiService from '../services/apiService'
import {
  startAction,
  successAction,
  failureAction,
  asyncAction
} from '../services/asyncService'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_REPOSITORIES = 'GET_REPOSITORIES'

// ------------------------------------
// Actions
// ------------------------------------
export const getRepositoriesStart = startAction(GET_REPOSITORIES)

export const fetchRepositoriesSuccess = successAction(GET_REPOSITORIES)

export const fetchRepositoriesFailure = failureAction(GET_REPOSITORIES)

export const getRepositories = asyncAction({
  request: (username) => apiService.getRepositories(username),
  start: getRepositoriesStart,
  success: fetchRepositoriesSuccess,
  failure: fetchRepositoriesFailure
})

export const actions = {
  getRepositories
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_REPOSITORIES]: (state, action) => {
    if (!action.meta.done) {
      return {
        ...state,
        error: '',
        entities: [],
        loading: true
      }
    }

    if (action.error) {
      const {
        response: { status }
      } = action.payload

      const errorMessage = (status === 404)
        ? 'user does not exist!'
        : 'fetching user failed!'

      return {
        ...state,
        loading: false,
        error: `error: ${errorMessage}`
      }
    }

    if (!action.payload.length) {
      return {
        ...state,
        loading: false,
        error: 'error: user has no repositories!'
      }
    }

    return {
      ...state,
      loading: false,
      entities: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loading: false,
  entities: [],
  error: ''
}
export default function repositoriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
