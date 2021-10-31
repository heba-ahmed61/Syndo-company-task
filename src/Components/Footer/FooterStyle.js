import styled from "styled-components";

export const FooterComponent = styled.div`
width:100%;
padding-bottom:20px;
background-color:${props => props.pathname == "/" ? "black" : "white"}



`
export const FooterContainer = styled.div.attrs({

    className: 'container'
})`

width:100%;



`
export const FooterContent = styled.div.attrs({

    className : 'row'
})`border-bottom : 2px solid #232326`
export const FooterLogo = styled.div.attrs({

    className : 'col-xlg-6 col-lg-6 col-md-6 col-12'
})``
export const FooterLogoLink = styled.a`
color:${props => props.pathname == "/" ? "white" : "black"};
text-decoration:none;
font-size:30px;
font-weight:700;
cursor:pointer;
&:hover{
color:#00abc1;
transition:color .5s ease;
}
`
export const FooterLogoLinkSpan = styled.span`
color:#00ACB1;
&:hover{
color:#f4f4f4;
transition:color .5s ease;
}
`
export const FooterInfo = styled.div.attrs({
    className : 'col-xlg-5 col-lg-5 col-md-5 col-12'

})``
export const FooterDescription = styled.p` color : ${props => props.pathname == "/" ? "white" : "black"} ; 
font-weight:600 ; margin-top:10px`
export const FooterInfoRow = styled.div.attrs({
    className : 'row'
})`margin-bottom:20px` 
export const FooterCol = styled.div.attrs({
    className: 'col-xlg-4 col-lg-4 col-md-4 col-12'
})``

export const FooterLink = styled.a`

color:${props => props.pathname == "/" ? "white" : "black"};
font-size:14px;
font-wight:bold;
text-decoration:none;
margin-left:-30px;
&:hover{
color:#00abc1;
transition:color .5s ease;
}
@media only screen and (max-width:769.9px){

    margin-left:0;
}

`
export const FooterLinkContainer = styled.div`cursor:pointer ; margin-bottom:20px;`
export const FooterDetails = styled.div`color:${props => props.pathname == "/" ? "white" : "black"};
margin:20px 0 10px 0; 
display:flex;
justify-content:space-between;
@media only screen and (max-width:767.9px){
    flex-direction:column;
}
`
export const DetailsOfFooter = styled.div``
export const Footerlanguage = styled.div``
export const FooterDetailsSpan = styled.span`font-size:14px; font-wight:bold ;  margin-right:15px;
color:${props => props.pathname == "/" ? "white" : "black"}
`
export const FooterlanguageSpan = styled.span`font-size:14px;  margin-left:5px;
color:${props => props.pathname == "/" ? "white" : "black"}
`