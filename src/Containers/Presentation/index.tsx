import {  PresentationContainer, RestaurantName, TitlePresentation } from '.'
import pastahero from '../../assets/pastahero.png'

const Presentation = () => {
    return (
        <>
        <PresentationContainer style={{backgroundImage: `url(${pastahero})`}}>
        <div className='content'>
            <RestaurantName>Italiana</RestaurantName>
            <TitlePresentation>La Dolce Vita Trattoria</TitlePresentation>
        </div>
        </PresentationContainer>
        </>
    )
}

export default Presentation