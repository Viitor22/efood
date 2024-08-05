import { ListContainer } from './index.ts'
import CardPerfil from '../../Components/CardPerfil/index.tsx'

const Menu = () => {
    return (
        <>
        <ListContainer>
            <CardPerfil></CardPerfil>
            <CardPerfil></CardPerfil>
            <CardPerfil></CardPerfil>
            <CardPerfil></CardPerfil>
        </ListContainer>
        </>
    )
}

export default Menu;