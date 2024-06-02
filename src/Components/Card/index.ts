import styled from "styled-components";

import { breakpoints, colors } from "../../Styles";

export const CardDiv = styled.div`
    border: 1px solid ${colors.main};
    position: relative;

    .card-content{
        padding: 8px;
    }

    img{
        max-width: 480px;
        width: 100%;
        max-height: 220px;
        object-fit: fill;

        @media (max-width: ${breakpoints.desktop}){
            max-width: 580px;
        }
    }

    
    p{
        margin-bottom: 20px;
    }
`

export const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;

    .card-grade{
        display: flex;
        text-align: center;
        align-items: center;

        img{
            margin-left: 8px;
        }
    }
`

export const CardTags = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;

    button{
        margin-right: 8px;
    }

    @media (max-width: ${breakpoints.tablet}){
        button{
            font-size: 12px;
        }
    }
`