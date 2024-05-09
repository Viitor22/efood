import Menu from "../../Containers/Menu/index.tsx"
import Footer from "../../Containers/Footer/index.tsx"
import HeaderPerfil from "../../Containers/HeaderPerfil/index.tsx"
import Presentation from "../../Containers/Presentation/index.tsx"
import { Restaurant } from "../../Containers/RestaurantList/index.tsx"
import { useEffect, useState } from "react"

const Perfil = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurants(res))
    }, [])

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