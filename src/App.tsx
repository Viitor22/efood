import { BrowserRouter } from 'react-router-dom'
import GlobalCss, { Container } from './Styles'
import Rotas from './routes'

function App() {

  return (
    <BrowserRouter>
    <GlobalCss></GlobalCss>
    <Container>
      <Rotas></Rotas>
    </Container>
    </BrowserRouter>
  )
}

export default App
