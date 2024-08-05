import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalCss, { Container } from './Styles'
import Rotas from './routes'
import { store } from './store'
import CartSideBar from './Components/CartSideBar/index.tsx'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Container>
          <Rotas></Rotas>
        </Container>
        <CartSideBar></CartSideBar>
      </BrowserRouter>
    </Provider>
  )
}

export default App
