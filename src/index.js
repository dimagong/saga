import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
//import logger from 'redux-logger'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { rootReducer } from './Redux/rootReducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import forbiddenWordsMidleware from './Redux/middleware'
import { sagaWatcher } from './Redux/sagas'

//const middlewares = [logger];

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMidleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
