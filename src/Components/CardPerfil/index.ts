import styled from "styled-components";

import { Button, SubTitle, Text, breakpoints, colors } from "../../Styles";

export const CardPerfilContainer = styled.div`
    display: flex;
    border: 1px solid ${colors.main};
    position: relative;
    padding: 8px;
    background-color: ${colors.main};
    flex-direction: column;
    justify-content: space-between;

    img{
        max-width: 305px;
        max-height: 170px;
        width: 100%;
        object-fit: fill;
    }

    @media (max-width: ${breakpoints.desktop}){
        max-width: auto;

        img{
            max-width: 100%;
        }
    }
`

export const CardSubTitle = styled(SubTitle)`
    color: ${colors.white};
    font-size: 16px;
    font-weight: 900;
`
export const CardText = styled(Text)`
    color: ${colors.white};
    margin: 10px 0px;
`
export const CardButton = styled(Button)`
    width: 100%;
    color: ${colors.main};
    background-color: ${colors.white};
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
    background-color: ${colors.main};
    position: relative;

    header{
        display: flex;
        justify-content: flex-end;

        img{
            cursor: pointer;
        }
    }

    @media (max-width: ${breakpoints.tablet}){
        max-width: 80%;
        max-height: 80%;
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
    }

    @media (max-width: ${breakpoints.tablet}){
        display: block;

        img{
            margin-top: 8px;
            width: 100%;
            height: 120px;
            object-fit: cover;
        }
        
        .text-content{
            p{
                margin: 20px 0px;
            }
    
            button {
                max-width: 225px;
                border: none;
                padding: 6px;
            }
        }
    }
`