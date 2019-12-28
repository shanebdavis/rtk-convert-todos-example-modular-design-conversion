import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'hooks-for-redux'
import { App } from './components/App'

render(
  <Provider><App /></Provider>,
  document.getElementById('root')
)