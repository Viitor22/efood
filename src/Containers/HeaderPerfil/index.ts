import styled from "styled-components";
import { Title, breakpoints } from "../../Styles/index.ts";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 90px;
    margin-bottom: 90px;
    align-items: center;
    position: relative;

    div{
        position: absolute;
        margin-bottom: 0px;
    }

    @media (max-width: ${breakpoints.tablet}){
        h1 {
        font-size: 14px;
        }

        h1:nth-child(1){
            margin-right: 210px;
        }
    }
`
export const HeaderTitle = styled(Title)`
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    z-index: 1;
`