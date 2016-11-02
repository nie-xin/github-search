import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {
  startAction,
  successAction,
  failureAction,
  asyncAction
} from '../../src/services/asyncService'

const middlewares = [ thunk ]
const mockStore = configureStore(middlewares)
const MOCK_FETCH = 'MOCK_FETCH'

const START_ACTION_MOCK = { type: MOCK_FETCH, meta: { done: false } }
const SUCCESS_ACTION_MOCK = { type: MOCK_FETCH, meta: { done: true } }
const ERROR_ACTION_MOCK = { type: MOCK_FETCH, error: true, meta: { done: true } }

describe('(AsyncActionServices) startAction', () => {
  it('Should dispatch correct thunk action', () => {
    const _mockStartAction = startAction(MOCK_FETCH)()
    const _expectAction = START_ACTION_MOCK
    expect(_mockStartAction).toEqual(_expectAction)
  })
})

describe('(AsyncActionServices) successAction', () => {
  it('Should dispatch correct thunk action with payload', () => {
    const payload = { test: 'test' }
    const _mockSuccessAction = successAction(MOCK_FETCH)(payload)
    const _expectAction = Object.assign({}, SUCCESS_ACTION_MOCK, { payload })
    expect(_mockSuccessAction).toEqual(_expectAction)
  })
})

describe('(AsyncActionServices) failureAction', () => {
  it('Should dispatch correct thunk action with error', () => {
    const _error = { error: 'error test' }
    const _mockFailureAction = failureAction(MOCK_FETCH)(_error)
    const _expectAction = Object.assign({}, ERROR_ACTION_MOCK, { payload: _error })
    expect(_mockFailureAction).toEqual(_expectAction)
  })
})

describe('(AsyncActionServices) asyncAction', () => {
  let _store, _options, _mockFetchStart, _mockFetchSuccess, _mockFetchFailure

  beforeEach(() => {
    _store = mockStore({})
    _mockFetchStart = startAction(MOCK_FETCH)
    _mockFetchSuccess = successAction(MOCK_FETCH)
    _mockFetchFailure = failureAction(MOCK_FETCH)
  })

  afterEach(() => {
    _store.clearActions()
  })

  it('Should dispatch startAction first', () => {
    _options = {
      request: () => Promise.resolve(),
      start: _mockFetchStart,
      success: _mockFetchSuccess,
      failure: _mockFetchFailure
    }

    const _actions = _store.getActions()
    const _expectAction = START_ACTION_MOCK

    const _mockFetch = asyncAction(_options)
    return _store
      .dispatch(_mockFetch())
      .then(() => expect(_actions[0]).toEqual(_expectAction))
  })

  it('Should dispatch successAction when request success', () => {
    const _payload = { test: 'test' }

    _options = {
      request: () => Promise.resolve(_payload),
      start: _mockFetchStart,
      success: _mockFetchSuccess,
      failure: _mockFetchFailure
    }

    const _actions = _store.getActions()
    const _expectAction = Object.assign({}, SUCCESS_ACTION_MOCK, { payload: _payload })

    const _mockFetch = asyncAction(_options)
    return _store
      .dispatch(_mockFetch())
      .then(() => expect(_actions[1]).toEqual(_expectAction))
  })

  it('Should dispatch failureAction when request failed', () => {
    const _error = { error: 'error' }

    _options = {
      request: () => Promise.reject(_error),
      start: _mockFetchStart,
      success: _mockFetchSuccess,
      failure: _mockFetchFailure
    }

    const _actions = _store.getActions()
    const _expectAction = Object.assign({}, ERROR_ACTION_MOCK, { payload: _error })

    const _mockFetch = asyncAction(_options)
    return _store
      .dispatch(_mockFetch())
      .then(() => expect(_actions[1]).toEqual(_expectAction))
  })
})
