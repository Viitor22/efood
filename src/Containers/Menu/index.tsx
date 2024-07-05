import { ListContainer } from './index.ts'
import CardPerfil from '../../Components/CardPerfil/index.tsx'
import { Restaurant } from '../../Models/restaurant.ts'
import { useParams } from 'react-router-dom'

type Props = {
    restaurants: Restaurant[]
}

const Menu = ({restaurants}:Props) => {
    const {id} = useParams();

    for (let i = 0; i < restaurants.length; i++) {
        if (id === undefined){
            break
        } else{
            if (restaurants[i].id == id) {
                return (
                    <>
                    <ListContainer>
                        {restaurants[i].menu?.map((menuItem) => (
                            <CardPerfil key={menuItem.id} image={menuItem.photo}
                            name={menuItem.name}
                            description={menuItem.description}
                            modalDescription={menuItem.description}
                            portion={menuItem.portion}
                            price={menuItem.price}>
                            </CardPerfil>
                        ))}
                    </ListContainer>
                    </>
                )
            }
        }
    }
}

export default Menu;