import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import GlobalCss, { Container } from './Styles'
import Perfil from './Pages/Perfil'

function App() {
  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/perfil',
      element: <Perfil></Perfil>
    }
  ])

  return (
    <>
    <GlobalCss></GlobalCss>
    <Container>
      <RouterProvider router={rotas}></RouterProvider>
    </Container>
    </>
  )
}

export default App
