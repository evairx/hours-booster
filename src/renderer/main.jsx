import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesPage from './pages/routes'
import './styles/global.css'
import {MemoryRouter} from 'react-router-dom'
import '../../i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryRouter>
      <RoutesPage />
    </MemoryRouter>
  </React.StrictMode>,
)
