import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/glass-card.css'
import './styles/classes.css'
import './styles/pre-definedClasses.css'
import './styles/calculator.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
