import styled from "styled-components";

export const Posts = styled.div`
width:100%;
margin:70px 0 100px 0;
`
export const PostsContainer = styled.div.attrs({

    className : 'container'
})``
export const PostsList = styled.div.attrs({
    
    className : 'row'
}) `
margin:50px 0;
cursor:pointer;

`

export const PostsRow = styled.div.attrs({

    className : 'col-xxl-3 col-xl-4  col-lg-6 col-md-6 col-12'
})`margin-bottom:50px;
`
export const PostsTitle = styled.h3`text-align:center`
export const PostsSubTitle = styled.h5`text-align:center;`

export const PostsSearchCol= styled.div.attrs({

    
})`display:flex; 
margin:50px 0;
@media only screen and (min-width:768px) and (max-width:991.9px){
    flex-direction:row;
}
@media only screen and (max-width:767.9px){
    flex-direction:column;
}

`
export const PostsInputs = styled.input`;
padding:5px 40px 5px 20px;
border-radius:5px;
border:1px solid black;
outlineLnone;
margin-bottom:15px;
@media only screen and (min-width:768px) and (max-width:991.9px){
    width:100%;
    margin-left:11px;
}

@media only screen and (max-width:767.9px){
    width:90%;
    margin-left:11px;
}

`
export const PostsSelecTBox = styled.select`;
padding : 0 100px 0 20px;
border-radius:5px;
border:1px solid black;
margin-bottom:15px;
outlineL:none;
margin-left:10px;



@media only screen and (min-width:768px) and (max-width:991.9px){
    width:100%;
    padding:5px 0;
}
@media only screen and (max-width:767.9px){
    width:90%;
    padding:5px 0;
}


`


