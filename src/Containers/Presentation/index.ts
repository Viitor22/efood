import styled from "styled-components";
import { Title, cores } from "../../Styles";

export const PresentationContainer = styled.div`
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .content{
        position: relative;
        padding: 30px 0px;
    }

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: ${cores.preto};
        content: '';
        opacity: 0.5;
    }
`
export const TitlePresentation = styled(Title)`
    color: ${cores.branco};
    font-size: 32px;
    text-align: left;
    padding-top: 150px;
`
export const RestaurantName = styled.h3`
    font-size: 32px;
    font-weight: 100;
    text-align: left;
    color: ${cores.branco};
`