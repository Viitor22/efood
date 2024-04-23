import { SubTitle, Text, Button} from '../../Styles'
import {CardDiv, CardTags, CardTitle} from './index.ts'
import sushi from '../../assets/sushi.png'
import star from '../../assets/star.png'
import { useNavigate } from 'react-router-dom'


const Card = () => {
    const navigate = useNavigate();

    const rotaPerfil = () => {
        navigate('/perfil')
    }


    return (
            <CardDiv>
                <CardTags>
                    <Button>Destaque da semana</Button>
                    <Button>Japonesa</Button>
                </CardTags>
                <img src={sushi}/>
                <div className='card-content'>
                    <CardTitle>
                    <SubTitle>Hioki Sushi</SubTitle>
                    <SubTitle className='card-grade'>4,9 <img src={star} alt="Estrela" /></SubTitle>
                    </CardTitle>
                    <Text className='card-text'>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Text>
                    <Button onClick={rotaPerfil}>Saiba Mais</Button>
                </div>
            </CardDiv>
    )
}

export default Card;