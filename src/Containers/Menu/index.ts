import styled from "styled-components";
import { breakpoints } from "../../Styles";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1024px;
    gap: 28px;
    margin-top: 100px;
    margin-bottom: 120px;

    
    @media (max-width: ${breakpoints.desktop}){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: 1fr;
    }
`