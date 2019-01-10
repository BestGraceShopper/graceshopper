import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './app'
import store from './store'
import history from './history'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
