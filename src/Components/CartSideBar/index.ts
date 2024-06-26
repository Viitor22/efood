import styled from "styled-components";

import { Button, Title, breakpoints, colors } from "../../Styles";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    opacity: 0.7;
`
export const CartContainer = styled.div`
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
export const Order = styled.li`
    background-color: ${colors.white};
    padding: 8px;
    margin-bottom: 16px;
    position: relative;

    .profile {
        height: 80px;
        width: 80px;
        object-fit: cover;
    }

    .flex {
        display: flex;
    }

    .text-content {
        margin-left: 8px;
    }
`
export const Icon = styled.img`
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    height: 16px;
    width: 16px;
`
export const Total = styled.div`
    margin: 36px 0 8px 0;
    display: flex;
    justify-content: space-between;

    p{
        color: ${colors.white};
    }
`

export const CartButton = styled(Button)`
    width: 100%;
    color: ${colors.main};
    background-color: ${colors.white};
`
export const CartTitle = styled(Title)`
    font-size: 18px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}){
        font-size: 14px;
    }
`
