import { useParams } from 'react-router-dom'
import { Restaurant } from '../RestaurantList/index.tsx'
import { PresentationContainer, RestaurantName, TitlePresentation } from './index.ts'

type Props = {
    restaurants: Restaurant[]
}

const Presentation = ({restaurants}:Props) => {
    const {id} = useParams();
    for (let i = 0; i < restaurants.length; i++) {
        if (id === undefined){

        } else{
            if (restaurants[i].id == id) {
                const {capa, tipo, titulo} = restaurants[i]
                return (
                    <>
                    <PresentationContainer style={{backgroundImage: `url(${capa})`}}>
                    <div className='content'>
                        <RestaurantName>{tipo}</RestaurantName>
                        <TitlePresentation>{titulo}</TitlePresentation>
                    </div>
                    </PresentationContainer>
                    </>
                )
            }
        }
    }
}

export default Presentation