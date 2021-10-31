import styled from "styled-components";

export const HomePage = styled.div`
background-color:#000000;
padding-bottom:50px;

`
export const HomeContainer = styled.div.attrs({

    className: 'container'
})`

width:100%;

`
export const ShowCase = styled.div`
padding-top:100px ;
padding-bottom-50px;
@media only screen and (max-width:769.9px){

    
}

`
export const ShowCaseContent = styled.div.attrs(()=>({

    className : 'row'
}))`

padding-top:100px;

@media only screen and (max-width:767.9px){

    padding-top:50px;
}


`
export const ShowCaseDetails = styled.div.attrs(()=>({
    className:'col-lg-6 col-md-6 col-12'
}))`padding-bottom:50px;`
export const ShowCaseTitle = styled.h6`
color:#00acb1;
margin-bottom:20px
`
export const SubTitle = styled.h2`color:#f4f4f4;
font-weight:bold;
margin-bottom:20px
`
export const Description = styled.h5`
color:#f4f4f4; 
margin-bottom:20px
`
export const ShowCaseLink = styled.a`
text-decoration:none;
color:white;
background-color:#00acb1;
padding :5px 10px;
cursor:pointer;
&:hover{
color:#00acb1;
background-color:white;
transition : all .7s ease;


}
`
export const ShowCaseImage = styled.div.attrs(()=>({
    className:'col-lg-6 col-md-6 col-12'
}))`margin-bottom:50px;`

export const Image = styled.img``

export const OurDoers = styled.div`
width:100%;
background-color:black;

`
export const DeorsTitle = styled.h3`
color:#f4f4f4;
font-weight:bold;
margin-bottom:40px;
`
export const Doers = styled.div.attrs(()=>({


}))` display:flex;
justify-content:space-between;
@media only screen and (max-width:767.9px){

    display:block;
}

`


export const DoersList = styled.div.attrs(()=>({

    

}))`
background-color: #232326;
color:white;
border-radius:5px;
padding:20px 40px;
margin-bottom:20px;
width:31.9%;

@media only screen and (max-width:767.9px){

    width:100%;
}
`
export const DoersDescription = styled.p`
padding:0 20px;

@media only screen and (min-width:768px) and (max-width:991.9px){

    padding : 0;
    
    font-size:14px;
}

`

export const Company = styled.div`

display:flex;
margin-top:35px;

`
export const CompanyLogo =  styled.div`
padding:0 0 0 20px;
@media only screen and (min-width:768px) and (max-width:991.9px){

    padding : 0;
    
    
}
`
export const ComapanyImage = styled.img`
width:40px;
heigth:40px;
border-radius:50%;
`

export const CompanyDetails = styled.div` margin-left:15px;`
export const ComapnyInfo = styled.h6`font-size:13px;`
export const CompanyName = styled.h6`color:gray;
font-size:10px;
`
export const Featured = styled.div`
width:100%;
background:black;
margin-top:50px;

padding-bottom : 20px;

`
export const FeaturedTitle = styled.h3`
color:white;
text-align : center;
`
export const FeaturedSlider = styled.div`margin:40px 0 70px 0;`
export const SliderImages = styled.img`
width:220px;
height:130px;
border-radius:7px;
`
export const SliderItem = styled.div``
export const ExplorePosts = styled.div`position:relative`
export const ExplorePostsTitle = styled.h3`color:white;`
export const PostsSlider = styled.div`margin:50px 0 70px 0;`
export const HomePicture = styled.img`

width:97%;
margin-top:30px;
max-height:400px;
@media only screen and (max-width:767.9px){

    width:90%;
    max-height:auto;
}
`