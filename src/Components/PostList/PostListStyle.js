import styled from "styled-components";


export const PostInfo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
export const postsTitle = styled.div``
export const PostTitle =  styled.h6``
export const PostsDate = styled.div`
margin-top:-14px;
`
export const PostDate = styled.span`
font-size:14px;

`
export const PostDescription = styled.p`
font-size:10px;
color:black;
`

export const PostInfoRow = styled.div.attrs({

    className : 'row'
})``
export const PostInfoCol = styled.div.attrs({

    className: 'col-4'
})``

export const RowContainer = styled.div.attrs({

    className : 'container'
})``
export const ColTitle = styled.p`font-size:12px;`
export const ColTitleData = styled.p`font-size:11px; font-weight:bold;`
export const ActionButton = styled.button`
background-color:e5dcdc;
border:none;
padding: 3px 25px;
border-radius:5px;
`
export const PrograssBar = styled.div`margin:-30px 0 10px 0 ;
display:flex;
align-items:center; 

`
export const SpanBrograss = styled.span`margin-top:20px ; font-size:12px;` 
export const CardContainer = styled.div
`position:relative;`
export const Badge = styled.div`
background-color:#f4f4f4;
position: absolute;
top:5px;
left:10px;
padding: 5px 15px ;
border-radius:5px;
`
export const DetailsLink = styled.a`text-decoration:none`