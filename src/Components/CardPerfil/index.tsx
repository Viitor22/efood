import * as S from "./index.ts"

import marguerita from '../../assets/marguerita.png'

const CardPerfil = () => {
    return (
        <>
        <S.CardPerfilContainer>
            <img src={marguerita}/>
            <S.CardSubTitle>Pizza Marguerita</S.CardSubTitle>
            <S.CardText>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</S.CardText>
            <S.CardButton>Adicionar ao carrinho</S.CardButton>
        </S.CardPerfilContainer>
        </>
    )
}

export default CardPerfil