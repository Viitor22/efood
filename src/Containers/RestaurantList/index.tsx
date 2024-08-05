import { Container } from '../../Styles'
import { List } from './index'
import Card from '../../Components/Card/index.tsx'
import { useEffect, useState } from 'react'

export type MenuModel = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type Restaurant = {
    id: string 
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuModel[]
}

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurants(res))
    }, [])

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