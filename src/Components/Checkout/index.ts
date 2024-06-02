import styled from "styled-components";

import { Button, Text, Title, breakpoints, colors } from "../../Styles";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    opacity: 0.7;
`
export const CheckContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open{
        display: flex;
    }
`
export const Sidebar = styled.aside`
    width: 360px;
    background-color: ${colors.main};
    z-index: 1;
    padding: 40px 16px 0 16px;

    @media (max-width: ${breakpoints.tablet}){
        width: 230px;
    }
`

export const CartButton = styled(Button)`
    width: 100%;
    color: ${colors.main};
    background-color: ${colors.white};
    border: none;
    margin-bottom: 8px;
`
export const CheckTitle = styled(Title)`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 700;
    color: ${colors.white};
    text-align: left;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 14px;
    }
`
export const CheckText = styled(Text)`
    font-size: 14px;
    margin-bottom: 8px;
    font-weight: 700;
    color: ${colors.white};

    @media (max-width: ${breakpoints.tablet}){
        font-size: 14px;
    }
`