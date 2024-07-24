import styled from 'styled-components'
import { breakpoints, Button, colors } from '../../Styles'

type Props = {
    maxWidht?: string
    isVisible?: boolean
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  display: none;
  justify-content: end;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside<Props>`
  background-color: ${colors.main};
  width: 360px;
  padding: 32px 8px 0 8px;
  z-index: 1;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  ul {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  button {
    width: 100%;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: ${colors.white};
  }
  .emptyCart {
    color: ${colors.white};
    text-align: center;
    font-weight: bold;
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

    p {
        font-size: 14px;
        font-weight: 400px;
        color: ${colors.main};
    }

    h2 {
        font-size: 18px;
        margin-bottom: 16px;
        color: ${colors.main};

        @media (max-width: ${breakpoints.tablet}){
            font-size: 14px;
        }
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

export const CartDescription = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;

  button {
    width: 100%;
    margin-top: 16px;
    font-size: 14px;
    font-weight: 700;
  }
`
export const CartButton = styled(Button)`
    width: 100%;
    color: ${colors.main};
    background-color: ${colors.white};
`

export const Form = styled.form`
  button {
    width: 100%;
    margin-bottom: 8px;
  }
  .magin-bottom {
    margin-bottom: 24px;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.white};
  margin-bottom: 16px;
`
export const InputGroup = styled.div<Props>`
  max-width: ${(props) => props.maxWidht || 'auto'};
  flex: auto;

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.white};
  }
  input {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
  }

  .error {
    border: 2px solid red;
  }
`
export const InputGrouping = styled.div`
  display: flex;
  column-gap: 30px;
`
export const MessageContainer = styled.div`
  p {
    margin-bottom: 24px;
  }
`