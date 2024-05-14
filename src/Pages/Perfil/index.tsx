import Menu from "../../Containers/Menu/index.tsx"
import Footer from "../../Containers/Footer/index.tsx"
import HeaderPerfil from "../../Containers/HeaderPerfil/index.tsx"
import Presentation from "../../Containers/Presentation/index.tsx"
import { useGetRestaurantQuery } from "../../services/api.ts"

const Perfil = () => {
    const {data: restaurants} = useGetRestaurantQuery()

    if(!restaurants){
        return
    }

    return (
        <>
        <HeaderPerfil></HeaderPerfil>
        <Presentation restaurants={restaurants} ></Presentation>
        <Menu restaurants={restaurants}></Menu>
        <Footer></Footer>
        </>
    )
}

export default Perfil