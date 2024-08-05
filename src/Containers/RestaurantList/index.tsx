import { Container } from '../../Styles'
import { List } from './index'
import Card from '../../Components/Card/index.tsx'
import { useGetRestaurantQuery } from "../../services/api.ts"


const RestaurantList = () => {
    const { data: restaurants } = useGetRestaurantQuery()

    if(!restaurants){
        return
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