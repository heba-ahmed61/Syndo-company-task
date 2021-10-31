import React from 'react';
import { LoginHeaderComponent, LoginHeaderContainer, LoginHeaderContent, LoginHeaderContentLogo, LoginLogoLink,
    BetaLoginSpan, LoginHeaderContentUser, LoginImage } from './LoginHeaderStyle';
import loginImage1  from '../../assest/images/login.png';
import { LogoLinkSpan } from '../Navbar/NavbarStyle';
const LoginHeader = () =>{

    return(
        <LoginHeaderComponent>
            <LoginHeaderContainer>
                <LoginHeaderContent>
                    <LoginHeaderContentLogo>
                        <LoginLogoLink href = "/" >Synd<LogoLinkSpan>o</LogoLinkSpan><BetaLoginSpan>BETA</BetaLoginSpan></LoginLogoLink>
                    </LoginHeaderContentLogo>
                    <LoginHeaderContentUser>
                    
                        <LoginImage src = {loginImage1}></LoginImage>
                    
                    </LoginHeaderContentUser>
                </LoginHeaderContent>
            </LoginHeaderContainer>
        </LoginHeaderComponent>
    )


}
export default LoginHeader;