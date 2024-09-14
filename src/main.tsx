import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './core/App.tsx'
import './core/styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
