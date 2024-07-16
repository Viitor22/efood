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
                        {restaurants[i].cardapio?.map((menuItem) => (
                            <CardPerfil key={menuItem.id} image={menuItem.foto}
                            name={menuItem.nome}
                            description={menuItem.descricao}
                            modalDescription={menuItem.descricao}
                            portion={menuItem.porcao}
                            price={menuItem.preco}>
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