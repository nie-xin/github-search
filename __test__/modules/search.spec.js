import {
  SEARCH_CHANGE,
  searchChange,
  searchSubmit,
  default as searchReducer
} from '../../src/modules/search'
import { getRepositories } from '../../src/modules/repositories'

describe('(Reducer) searchReducer', () => {
  let initialState = ''

  it('Should return initial state', () => {
    expect(searchReducer(undefined, '')).toEqual(initialState)
  })
})

describe('(Action) searchChange', () => {
  it('Should dispatch SEARCH_CHANGE action with keyword', () => {
    const action = searchChange('test')
    expect(action.type).toBe(SEARCH_CHANGE)
    expect(action.payload).toBe('test')
  })
})

describe('(Action) searchSubmit', () => {
  it('Should return a function', () => {
    const action = searchSubmit()
    expect(action).toBeDefined()
  })

  it('Should dispatch getRepositories', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      search: 'test'
    })

    const action = searchSubmit()(dispatch, getState)
    expect(dispatch).toHaveBeenCalled()
  })
})
