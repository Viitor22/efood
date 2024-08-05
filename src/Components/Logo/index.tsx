import {LogoDiv} from './index.ts';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
            <LogoDiv>
                <img src={logo} alt="Efood Logo" />
            </LogoDiv>
    )
}

export default Logo;


