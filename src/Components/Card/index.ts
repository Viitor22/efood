import styled from "styled-components";
import { cores } from "../../Styles";

export const CardDiv = styled.div`
    border: 1px solid ${cores.principal};
    position: relative;

    .card-content{
        padding: 8px;
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
`