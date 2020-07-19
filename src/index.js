import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())
const rootElement = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
