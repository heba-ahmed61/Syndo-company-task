import styled from "styled-components";

export const LoginHeaderComponent = styled.div` 
width:100%;
top:0;
z-index:130;


`
export const LoginHeaderContainer = styled.div.attrs({

    className : 'container'
})``
export const LoginHeaderContent = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const LoginHeaderContentLogo = styled.div`
@media only screen and (max-width:991.9px){
    margin-top:-20px;
}
`
export const LoginHeaderContentUser = styled.div`display:flex`
export const LoginImage = styled.img`width:80% ;  `
export const LoginLogoLink = styled.a`
color:black;
text-decoration:none;
font-size:30px;
font-weight:700;
position:relative;
&:hover{
color:#00abc1;
transition:color .5s ease;
}`
export const BetaLoginSpan = styled.div`font-size:12px; position:absolute; right:5%; color:black;`

