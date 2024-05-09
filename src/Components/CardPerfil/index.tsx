import * as S from "./index.ts"
import close from '../../assets/close 1.png'
import { useState } from "react";

const CardPerfil = (MenuItemsModal: { image: any; name: any; description: any; modalDescription: any; portion: any; price: any }) => {
    const {image, name, description, modalDescription, portion, price} = MenuItemsModal
    const [ModalActive, setModalActive] = useState(false);

    return (
        <>
        <S.CardPerfilContainer>
            <img src={image}/>
            <S.CardSubTitle>{name}</S.CardSubTitle>
            <S.CardText>{description}</S.CardText>
            <S.CardButton onClick={() => setModalActive(true)}>Adicionar ao carrinho</S.CardButton>
        </S.CardPerfilContainer>
        <S.Modal className={ ModalActive ? 'visible' : ''}>
            <S.ModalContent >
                <header>
                    <img onClick={() => setModalActive(false)} src={close} alt="Ícone de fechar" />
                </header>
                <S.ModalContentContainer>
                    <img src={image} alt="" />
                    <div className="text-content">
                    <S.CardSubTitle>{name}</S.CardSubTitle>
                    <S.CardText>{modalDescription}</S.CardText>
                    <S.CardText>Serve: {portion}</S.CardText>
                    <S.CardButton>Adicionar ao carrinho - R$ {price}</S.CardButton>
                    </div>
                </S.ModalContentContainer>
            </S.ModalContent>
            <div className='overlay'>
            </div>
        </S.Modal>
        </>
    )
}

export default CardPerfil