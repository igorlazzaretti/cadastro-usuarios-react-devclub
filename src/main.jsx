import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Estilos globais do styled-components
import { GlobalStyles } from './styles/GlobalStyles.js'
// React Router Dom - Rotas de Navegação
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </StrictMode>,
)
