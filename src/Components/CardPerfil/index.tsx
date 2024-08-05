import * as S from "./index.ts"
import close from '../../assets/close 1.png'
import { useState } from "react";
import { add, open } from "../../store/reducer/cart.ts";
import { useDispatch, useSelector } from "react-redux";
import { Pedido } from "../../Models/pedido.ts";
import { RootReducer } from "../../store/index.ts";

const CardPerfil = (MenuItemsModal: { image: any; name: any; description: any; modalDescription: any; portion: any; price: any }) => {
    const {image, name, description, modalDescription, portion, price} = MenuItemsModal
    const [ModalActive, setModalActive] = useState(false);
    const {items} = useSelector((state: RootReducer)=>(state.cart))

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    const pedido: Pedido = {
        foto: image,
        preco: price,
        nome: name,
        id: items.length
    }

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
        dispatch(add(pedido))
    }

    return (
        <>
        <S.CardPerfilContainer>
            <div>
                <img src={image}/>
                <S.CardSubTitle>{name}</S.CardSubTitle>
                <S.CardText>{description}</S.CardText>
            </div>
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
                    <S.CardButton onClick={openCart}>Adicionar ao carrinho - {formatPrice(price)}</S.CardButton>
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