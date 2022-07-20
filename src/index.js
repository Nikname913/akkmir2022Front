import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './appStore/store'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App></App>
    </Provider> 
  </BrowserRouter>,
  document.getElementById('root')
)
