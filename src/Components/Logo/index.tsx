import {LogoDiv} from './index.ts';
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
            <LogoDiv>
                <h1>
                    <img src={logo} alt="Efood Logo" />
                </h1>
            </LogoDiv>
    )
}

export default Logo;


