import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
import '../../index.css'
import { Nav ,Container, NavContent, NavLogo ,NavLinks, LogoLink, LogoLinkSpan, NavLinksUl, LinksList, NavIcon, NavContainer, BetaSpan } from "./NavbarStyle.js";
const Navbar = () =>{

    const [click , setClick] = useState(false)
    const handelClick = () =>{

        setClick(!click)
    }
    
    

    
    return( 
        
        <Nav >
            <Container>
                <NavContent>
                    <NavLogo>
                        <LogoLink href = "/" >Synd<LogoLinkSpan>o</LogoLinkSpan><BetaSpan>BETA</BetaSpan></LogoLink>
                    </NavLogo>
                    <NavLinks className={click ? "active-menu" : "hidden-menu"}>
                        <NavLinksUl>
                            <LinksList>
                            <NavLink to = "/posts" style={{color:"#f4f4f4" , textDecoration:"none"}} >posts</NavLink>
                            </LinksList>
                            <LinksList>
                            <NavLink   to = "#"  style={{color:"#f4f4f4" , textDecoration:"none"}} >Testimonials</NavLink>
                            </LinksList>
                            <LinksList>
                            <NavLink to = "#" style={{color:"#f4f4f4" , textDecoration:"none"}}  >Login</NavLink>
                            </LinksList>
                            <LinksList>
                            <NavLink to = "#"  style={{color:"#000000" , textDecoration:"none", background:"#f4f4f4", padding:"5px 10px" , fontWeight:"bold" , borderRadius:"5px"}} >Get started</NavLink>
                            </LinksList>
                        </NavLinksUl>
                    
                    </NavLinks>
                    <NavIcon onClick={handelClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </NavIcon>
                    
                </NavContent>
        
            </Container>
        </Nav>
        
    )
}
export default Navbar ;