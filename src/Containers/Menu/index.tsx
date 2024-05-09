import { ListContainer } from './index.ts'
import CardPerfil from '../../Components/CardPerfil/index.tsx'
import { Restaurant } from '../RestaurantList/index.tsx'
import { useParams } from 'react-router-dom'

type Props = {
    restaurants: Restaurant[]
}

const Menu = ({restaurants}:Props) => {
    const {id} = useParams();
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    for (let i = 0; i < restaurants.length; i++) {
        if (id === undefined){
            return (
                <>
                <ListContainer>
                    {restaurants[i].cardapio.map((menuItem) => (
                        <CardPerfil image={menuItem.foto}
                        name={menuItem.nome}
                        description={menuItem.descricao}
                        modalDescription={menuItem.descricao}
                        portion={menuItem.porcao}
                        price={formatPrice(menuItem.preco)}>
                        </CardPerfil>
                    ))}
                </ListContainer>
                </>
            )
        } else{
            if (restaurants[i].id === i) {
                return (
                    <>
                    <ListContainer>
                        {restaurants[i].cardapio.map((menuItem) => (
                            <CardPerfil image={menuItem.foto}
                            name={menuItem.nome}
                            description={menuItem.descricao}
                            modalDescription={menuItem.descricao}
                            portion={menuItem.porcao}
                            price={formatPrice(menuItem.preco)}>
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