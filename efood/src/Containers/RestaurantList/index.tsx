import { Container } from '../../Styles'
import { List } from './index'
import Card from '../../Components/Card/index.tsx'

const RestaurantList = () => {
    return (
        <Container>
            <List>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </List>
        </Container>
    )
}

export default RestaurantList;