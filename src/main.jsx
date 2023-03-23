import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {SLIDES} from './utils.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App slides={SLIDES} />
  </React.StrictMode>,
)
