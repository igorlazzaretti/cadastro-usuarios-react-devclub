import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
// Estilos globais do styled-components
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
