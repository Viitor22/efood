import Logo from '../../Components/Logo/index.tsx'

import redesSociais from '../../assets/redes sociais.png'
import { FooterContainer, TextFooter } from './index.ts'


const Footer = () => {
    return (
            <FooterContainer>
                <Logo></Logo>
                <div className='redes'>
                <img src={redesSociais} alt="" />
                </div>                
                <TextFooter>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</TextFooter>
            </FooterContainer>
    )
}

export default Footer;