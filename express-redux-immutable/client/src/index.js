import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createMiddleware } from 'zan-shuai'
import { createLogger } from 'redux-logger'
import Perf from 'react-addons-perf';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css'
import RouterPage from './router'
import states from './states'
import './states/effects'
import registerServiceWorker from './registerServiceWorker'

window.Perf = Perf;
const stateTransformer = (state) => {
  return state.toJS()
}
const configureStore = (state) => {
  const middlewares = [createMiddleware()]
  middlewares.push(createLogger({
    stateTransformer, level: 'info', diff: true,
    // not debugger friendly
    logErrors: false,
    duration: true,
    collapsed: true
  }))

  return createStore(state, composeWithDevTools(applyMiddleware(...middlewares)))
}
const store = configureStore(states)

ReactDOM.render(
  <Provider store={store}>
    <RouterPage/>
  </Provider>, document.getElementById('root'))
registerServiceWorker()
