import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/glass-card.css'
import './styles/classes.css'
import App from './App.jsx'
import OSProvider from './context/OSProvider.jsx'

createRoot(document.getElementById('root')).render(
  <OSProvider>
    <App />
  </OSProvider>
)
