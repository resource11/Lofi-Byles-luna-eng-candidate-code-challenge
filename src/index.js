import React from 'react'
import { render } from 'react-dom'
import App from './App'
import AnalyticsProvider from './components/AnalyticsContext'

// import './index.scss'

if (module.hot) {
  module.hot.accept()
}

render(
  (<AnalyticsProvider namespace="my-app">
    <App />
  </AnalyticsProvider>),
  document.getElementById('__approot')
)
