import styled from "styled-components";
import { Button, SubTitle, Text, cores } from "../../Styles";

export const CardPerfilContainer = styled.div`
    border: 1px solid ${cores.principal};
    position: relative;
    padding: 8px;
    background-color: ${cores.principal};
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