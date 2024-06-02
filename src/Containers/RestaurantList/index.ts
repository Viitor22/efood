import styled from "styled-components";
import { breakpoints } from "../../Styles";

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    margin-top: 100px;
    margin-bottom: 120px;

    @media (max-width: ${breakpoints.desktop}){
        grid-template-columns: 1fr;
    }
`