import { useDispatch, useSelector } from "react-redux"
import Logo from "../../Components/Logo/index.tsx"
import { HeaderContainer, HeaderTitle } from "./index.ts"
import { RootReducer } from "../../store/index.ts"
import { useNavigate } from "react-router-dom"
import { open } from "../../store/reducer/cart.ts"

const HeaderPerfil = () => {
    const {items} = useSelector((state: RootReducer)=>(state.cart))

    const navigate = useNavigate();
    const rotaHome = () => {
        navigate('/')
    }

    const dispatch = useDispatch()
    const openCart = () => {
        dispatch(open())
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={rotaHome}>Restaurantes</HeaderTitle>
            <Logo></Logo>
            <HeaderTitle onClick={openCart}>{items.length} - produto(s) no carrinho</HeaderTitle>
        </HeaderContainer>
    )
}

export default HeaderPerfil