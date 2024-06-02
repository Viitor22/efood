import { useParams } from 'react-router-dom'
import { Restaurant } from '../../Models/restaurant.ts'
import { PresentationContainer, RestaurantName, TitlePresentation } from './index.ts'

type Props = {
    restaurants: Restaurant[]
}

const Presentation = ({restaurants}:Props) => {
    const {id} = useParams();
    for (let i = 0; i < restaurants.length; i++) {
        if (id === undefined){
            break
        } else{
            if (restaurants[i].id == id) {
                const {banner, type, title} = restaurants[i]
                return (
                    <>
                    <PresentationContainer style={{backgroundImage: `url(${banner})`}}>
                    <div className='content'>
                        <RestaurantName>{type}</RestaurantName>
                        <TitlePresentation>{title}</TitlePresentation>
                    </div>
                    </PresentationContainer>
                    </>
                )
            }
        }
    }
}

export default Presentation