import { combineReducers } from 'redux'
import search from './search'
import repositories from './repositories'

const appReducer = combineReducers({
  search,
  repositories
})

export default appReducer
