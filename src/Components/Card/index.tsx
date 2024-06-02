import { useNavigate } from 'react-router-dom'

import { SubTitle, Text, Button} from '../../Styles'
import {CardDiv, CardTags, CardTitle} from './index.ts'

import { Restaurant } from '../../Models/restaurant.ts'

import star from '../../assets/star.png'

type Props = {
    restaurants: Restaurant
}

const Card = ({restaurants}:Props) => {
    const {grade, banner, description, highlighted, id, type, title} = restaurants
    const navigate = useNavigate();

    const routePerfil = () => {
        navigate(`/perfil/${id}`)
    }

    return (
            <CardDiv>
                <CardTags>
                    {highlighted ? (<Button>Destaque da semana</Button>) : ( <></>)}
                    
                    <Button>{type}</Button>
                </CardTags>
                <img src={banner}/>
                <div className='card-content'>
                    <CardTitle>
                    <SubTitle>{title}</SubTitle>
                    <SubTitle className='card-grade'>{grade}<img src={star} alt="Estrela" /></SubTitle>
                    </CardTitle>
                    <Text className='card-text'>{description}</Text>
                    <Button onClick={routePerfil}>Saiba Mais</Button>
                </div>
            </CardDiv>
    )
}

export default Card;