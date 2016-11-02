import React from 'react'
import ReactDOM from 'react-dom'
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import appReducer from './modules'
import './styles/index.css'

const middleware = applyMiddleware(thunk)

// Enable redux devtool
const store = createStore(
  appReducer,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
