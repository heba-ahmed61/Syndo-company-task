import styled from "styled-components";

export const Nav = styled.div`
background-color:#000000;
width:100%;
padding:25px 0 10px ;
position:fixed;
width:100%;
z-index:100;



`
export const Container = styled.div.attrs({

    className : 'container'
})
    `
    
    `
export const NavContent = styled.div`
display:flex;
justify-content : space-between;



`
export const NavLogo = styled.div`
position:relative;
`
export const LogoLink = styled.a`
color:white;
text-decoration:none;
font-size:30px;
font-weight:700;
&:hover{
color:#00abc1;
transition:color .5s ease;
}

`
export const LogoLinkSpan = styled.span`
color:#00ACB1;
&:hover{
color:#f4f4f4;
transition:color .5s ease;
}

`
export const NavLinks = styled.div`
margin-top:2px;
z-index:100;

`
export const NavLinksUl = styled.ul`
list-style:none;


`
export const LinksList = styled.li`
display:inline;
padding: 0 25px ;


@media only screen and (max-width:767.9px){

    display:block;
    padding:40px 0;
    text-align:center;
    width:100%;
    font-size:20px;
}
`

export const NavIcon = styled.div`
display:none;
@media only screen and (max-width:767.9px){

    display:block;
    font-size:20px;
    color:white;

}


`
export const BetaSpan = styled.div`font-size:12px; position:absolute; right:5%;`



