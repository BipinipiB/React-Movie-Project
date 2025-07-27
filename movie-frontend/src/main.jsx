import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* BrowserRouter: Enables routing — it listens to the URL and lets you switch pages. */}
  {/* App: Your main component that contains the routes. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
