import { SubTitle, Text, Button} from '../../Styles'
import {CardDiv, CardTags, CardTitle} from './index.ts'
import star from '../../assets/star.png'
import { useNavigate } from 'react-router-dom'
import { Restaurant } from '../../Containers/RestaurantList/index.tsx'

type Props = {
    restaurants: Restaurant
}

const Card = ({restaurants}:Props) => {
    const {avaliacao, capa, descricao, destacado, id, tipo, titulo} = restaurants
    const navigate = useNavigate();

    const rotaPerfil = () => {
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
                    <Button onClick={rotaPerfil}>Saiba Mais</Button>
                </div>
            </CardDiv>
    )
}

export default Card;