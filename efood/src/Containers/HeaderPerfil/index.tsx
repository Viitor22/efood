import Logo from "../../Components/Logo/index.tsx"
import { HeaderContainer, HeaderTitle } from "./index.ts"

const HeaderPerfil = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Restaurantes</HeaderTitle>
            <Logo></Logo>
            <HeaderTitle>0 - produto(s) no carrinho</HeaderTitle>
        </HeaderContainer>
    )
}

export default HeaderPerfil