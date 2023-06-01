import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalstyles.css'
import { Home } from './page'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
