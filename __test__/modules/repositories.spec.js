import {
  default as repositoriesReducer
} from '../../src/modules/repositories'

describe('(Reducer) repositoriesReducer', () => {
  let initialState = {
    loading: false,
    entities: [],
    error: ''
  }

  it('Should return initial state', () => {
    expect(repositoriesReducer(undefined, '')).toEqual(initialState)
  })
})
