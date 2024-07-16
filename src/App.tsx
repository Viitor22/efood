import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import AllRoutes from './routes'

import GlobalCss, { Container } from './Styles'
import CartSideBar from './Components/CartSideBar/index.tsx'
import Delivery from './Components/Delivery/index.tsx'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Container>
          <AllRoutes></AllRoutes>
        </Container>
        <CartSideBar></CartSideBar>
        <Delivery></Delivery>
      </BrowserRouter>
    </Provider>
  )
}

export default App
