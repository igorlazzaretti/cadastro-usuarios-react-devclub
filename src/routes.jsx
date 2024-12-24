// Importação para criar o roteamento
import { createBrowserRouter } from 'react-router-dom'
// Importação de cada página
import Home from './pages/Home'
import ListUsers from './pages/ListUsers'

// Criação do roteamento como um array
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        // Caminho que aparece na URL para o usuário
        path: '/lista-de-usuarios',
        element: <ListUsers/>
    }
])

export default router