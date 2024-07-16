import { useNavigate } from 'react-router-dom'

import { SubTitle, Text, Button} from '../../Styles'
import {CardDiv, CardTags, CardTitle} from './index.ts'

import { Restaurant } from '../../Models/restaurant.ts'

import star from '../../assets/star.png'

type Props = {
    restaurants: Restaurant
}

const Card = ({restaurants}:Props) => {
    const { titulo, destacado, tipo, avaliacao, descricao, capa, id} = restaurants
    const navigate = useNavigate();

    const routePerfil = () => {
        navigate(`/perfil/${id}`)
    }

    return (
            <CardDiv>
                <CardTags>
                    {destacado ? (<Button>Destaque da semana</Button>) : ( <></>)}
                    
                    <Button>{tipo}</Button>
                </CardTags>
                <img src={capa}/>
                <div className='card-content'>
                    <CardTitle>
                    <SubTitle>{titulo}</SubTitle>
                    <SubTitle className='card-grade'>{avaliacao}<img src={star} alt="Estrela" /></SubTitle>
                    </CardTitle>
                    <Text className='card-text'>{descricao}</Text>
                    <Button onClick={routePerfil}>Saiba Mais</Button>
                </div>
            </CardDiv>
    )
}

export default Card;