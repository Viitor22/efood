import { Container } from '../../Styles'
import { List } from './index'
import Card from '../../Components/Card/index.tsx'
import { useGetRestaurantQuery } from "../../services/api.ts"
import Loader from '../../Components/Loader/index.tsx'


const RestaurantList = () => {
    const { data: restaurants, isLoading } = useGetRestaurantQuery()

    if(!restaurants){
        return
    }

    if(isLoading){
        <Loader></Loader>
    }

    return (
        <Container>
            <List>
                {restaurants.map((res) => (<Card key={res.id} restaurants={res}>
                </Card>))}
            </List>
        </Container>
    )
}

export default RestaurantList;