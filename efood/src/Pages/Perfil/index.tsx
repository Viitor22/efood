import Menu from "../../Containers/Menu/index.tsx"
import Footer from "../../Containers/Footer/index.tsx"
import HeaderPerfil from "../../Containers/HeaderPerfil/index.tsx"
import Presentation from "../../Containers/Presentation/index.tsx"

const Perfil = () => {
    return (
        <>
        <HeaderPerfil></HeaderPerfil>
        <Presentation></Presentation>
        <Menu></Menu>
        <Footer></Footer>
        </>
    )
}

export default Perfil