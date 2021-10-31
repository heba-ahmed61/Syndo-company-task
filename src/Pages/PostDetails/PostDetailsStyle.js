import styled from "styled-components";

export const PostsDetails = styled.div `
width:100%;
margin-top:40px;

`
export const PostDetailsContainer = styled.div.attrs({
    className : 'container'

})``
export const PostDetailsContent = styled.div``
export const PostDetailsContentImage = styled.div.attrs({
    
})`margin-left:-70px;`
export const PostDetailsImage = styled.img`
width:250px;
height:150px;
`
export const PostDetailsTitle = styled.h4``
export const PostDetailsRow = styled.div.attrs({

    className : 'row'
})``
export const PostDetailsInfo = styled.div.attrs({

    className : 'col-xxl-7 col-xl-7 col-lg-7 col-md-7 col-12'
})``
export const PostsInfoCol = styled.div.attrs({

    className : 'col-xxl-3 col-xl-4 col-lg-5 col-md-5 col-12'
})`margin:40px auto;
    @media only screen and (max-width:767.9px){
        margin :0;
    }
`
export const PostRaised = styled.h5`
color:gray; 
font-wight:900`
export const Buttons =  styled.div`
margin: 20px 0 15px 0;
`
export const PostButtons = styled.button`
margin-right:15px;
background-color:e5dcdc;
border:none;
padding: 3px 25px;
border-radius:5px;
`
export const PostIcons = styled.div``
export const Icon = styled.span`
margin : 0 7px;
`

export const Invest =  styled.div`
margin:20px 0;
`
export const InvestButton = styled.button`
border:none;
color:white;
background-color:#00abc1;
border:1px solid #00abc1;
padding : 5px 20px;
border-radius : 20px;
&:hover{
color:#00abc1;
background-color:white;
transition:all .7s ease;

}
`
export const Tabs = styled.div``
export const CardPost = styled.div``;
export const CamelVenturesImage = styled.div`
margin:20px 0;
text-align:center;

`
export const CamelImage = styled.img `width:80%;`
export const SyndoImage = styled.div`
margin:20px 0;
text-align:center;

`
export const SyndoInvestImage = styled.img `width:80%;`

