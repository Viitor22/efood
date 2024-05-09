import styled from "styled-components";
import { Button, SubTitle, Text, cores } from "../../Styles";

export const CardPerfilContainer = styled.div`
    border: 1px solid ${cores.principal};
    position: relative;
    padding: 8px;
    background-color: ${cores.principal};

    img{
        max-width: 305px;
        max-height: 170px;
        width: 100%;
        object-fit: fill;
    }
`

export const CardSubTitle = styled(SubTitle)`
    color: ${cores.branco};
    font-size: 16px;
    font-weight: 900;
`
export const CardText = styled(Text)`
    color: ${cores.branco};
    margin: 10px 0px;
`
export const CardButton = styled(Button)`
    width: 100%;
    color: ${cores.principal};
    background-color: ${cores.branco};
`
export const Modal = styled.div`
    z-index: 1;   
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible{
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
`
export const ModalContent = styled.div`
    z-index: 1;   
    max-width: 1024px;
    padding: 8px;
    background-color: ${cores.principal};
    position: relative;

    header{
        display: flex;
        justify-content: flex-end;

        img{
            cursor: pointer;
        }
    }
`
export const ModalContentContainer = styled.div`
    padding: 0px 16px 16px 16px;
    display: flex;

    img{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

    .text-content{
        margin-left: 22px;

        p{
            margin: 20px 0px;
        }

        button {
            max-width: 225px;
            border: none;
            padding: 6px;
        }
`