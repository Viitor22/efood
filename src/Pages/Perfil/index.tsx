import { useGetRestaurantQuery } from "../../services/api.ts"
import Menu from "../../Containers/Menu/index.tsx"
import Footer from "../../Containers/Footer/index.tsx"
import HeaderPerfil from "../../Containers/HeaderPerfil/index.tsx"
import Presentation from "../../Containers/Presentation/index.tsx"
import Loader from "../../Components/Loader/index.tsx"

const Perfil = () => {
    const {data: restaurants, isLoading} = useGetRestaurantQuery()

    if(!restaurants){
        return
    }

    if(isLoading){
        <Loader></Loader>
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