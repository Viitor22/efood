import styled, {createGlobalStyle} from "styled-components";

export const cores = {
    principal: '#E66767',
    branco: ' #FFEBD9',
    preto: '#000'
}

const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
        list-style: none;
    }
`

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    color: ${cores.principal};
`
export const SubTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: ${cores.principal};
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
    color: ${cores.principal};
`
export const Button = styled.button`
    padding: 3px 6px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    color: ${cores.branco};
    background-color: ${cores.principal};
    border: solid ${cores.principal};
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`


export default GlobalCss