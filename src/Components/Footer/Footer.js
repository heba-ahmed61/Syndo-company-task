import React, { Component, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import { FooterCol, FooterComponent, FooterContainer, FooterContent, FooterDescription, FooterInfo, FooterInfoRow, FooterLogo
    , FooterLogoLink , FooterLogoLinkSpan  , FooterLink, FooterLinkContainer, FooterDetails, DetailsOfFooter, Footerlanguage, FooterDetailsSpan, FooterlanguageSpan} from './FooterStyle';


const Footer =() =>{

    const {pathname} = useLocation()

    

    return(
        <FooterComponent pathname={pathname} >
            <FooterContainer>
            <FooterContent>
                <FooterLogo>
                    <FooterLogoLink pathname={pathname}>
                        Synd<FooterLogoLinkSpan>o</FooterLogoLinkSpan>
                    </FooterLogoLink>
                    <FooterDescription pathname={pathname}>BY CROWD FOR THE CROWED</FooterDescription>
                </FooterLogo>
                <FooterInfo>
                    <FooterInfoRow>
                        <FooterCol>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname}  >Products</FooterLink>
                        </FooterLinkContainer>
                        </FooterCol>
                        <FooterCol>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname} >Company</FooterLink>
                        </FooterLinkContainer>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname} >About</FooterLink>
                        </FooterLinkContainer>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname} >Risk</FooterLink>
                        </FooterLinkContainer>
                        </FooterCol>
                        <FooterCol>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname} >Resources</FooterLink>
                        </FooterLinkContainer>
                        <FooterLinkContainer>
                        <FooterLink pathname={pathname}>How it works</FooterLink>
                        </FooterLinkContainer>
                        <FooterLinkContainer>
                        <FooterLink href = "#" pathname={pathname} >FAQ</FooterLink>
                        </FooterLinkContainer>
                        </FooterCol>
                    </FooterInfoRow>
                </FooterInfo>
            </FooterContent>
            <FooterDetails>
                <DetailsOfFooter>
                    <FooterDetailsSpan pathname={pathname} >&copy; syndo 2021 .All Rights Reserved</FooterDetailsSpan>
                    <FooterDetailsSpan pathname={pathname} >Privacy Policy</FooterDetailsSpan>
                    <FooterDetailsSpan pathname={pathname}>Legal Terms</FooterDetailsSpan>
                </DetailsOfFooter>
                <Footerlanguage>
                    <FooterlanguageSpan pathname={pathname} >En</FooterlanguageSpan>
                    <FooterlanguageSpan pathname={pathname} ><i className="fas fa-angle-down"></i></FooterlanguageSpan>
                

                </Footerlanguage>
            </FooterDetails>
            </FooterContainer>

        </FooterComponent>
    
    )
    
}

export default Footer;