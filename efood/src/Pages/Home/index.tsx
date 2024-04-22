import Hero  from "../../Containers/Hero/index.tsx"
import RestaurantList from "../../Containers/RestaurantList/index.tsx"
import Footer from "../../Containers/Footer/index.tsx"

const Home = () => {
    return (
        <>
        <Hero></Hero>
        <RestaurantList></RestaurantList>
        <Footer></Footer>
        </>
    )
}

export default Home