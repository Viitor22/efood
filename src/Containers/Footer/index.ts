import styled from "styled-components";
import { Text } from "../../Styles";

export const FooterContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 60px;

    .redes {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const TextFooter = styled(Text)`
    text-align: center;
    max-width: 680px;
    margin-top: 60px;
    padding: 0;
`