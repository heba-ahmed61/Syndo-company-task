import React, { Component, useState } from 'react';
import { Posts, PostsContainer, PostsInputs, PostsList, PostsRow, PostsSearchCol, PostsSearchRow, PostsSelecTBox, PostsSubTitle, PostsTitle , } from './PostsStyle';
import data from '../../Posts.json';
import PostList from '../../Components/PostList/PostList';
import { FooterCol, FooterComponent, FooterContainer, FooterContent, FooterDescription, FooterInfo, FooterInfoRow, FooterLogo
    , FooterLogoLink , FooterLogoLinkSpan  , FooterLink, FooterLinkContainer, FooterDetails, DetailsOfFooter, Footerlanguage, FooterDetailsSpan, FooterlanguageSpan} from '../../Components/Footer/FooterStyle';
import Footer from '../../Components/Footer/Footer';
import LoginHeader from '../../Components/LoginHeader/LoginHeader';

export class PostsPage extends Component {

    constructor(props){

        super(props);

        this.state ={

            posts :  data.posts
        }
    }

    render(){

        return(
            <>
            <LoginHeader/>
            <Posts>
                <PostsContainer>
                    <PostsTitle>Posts</PostsTitle>
                    <PostsSubTitle>Scout.Invest.Repeat</PostsSubTitle>
                    
                        
                    <PostsSearchCol> 
                    <PostsInputs type ="text" placeholder="Type to search..."></PostsInputs>
                        
                
                            
                            <PostsSelecTBox>
                            <option value = "Status">Status</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>
                                </PostsSelecTBox>
                        
                        
                            <PostsSelecTBox>
                            <option value = "Type">Type</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>

                            </PostsSelecTBox>
                            
                            
                            <PostsSelecTBox>
                            <option value = "Most Funded">Most Funded</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>
                                <option value = "post">post</option>

                            </PostsSelecTBox>
                    
                        
                        </PostsSearchCol>
                    
                    
                <PostsList>
                { this.state.posts.map(post=>(
                    <PostsRow>
                    <PostList post = {post}/>
                    </PostsRow>
                ))}
                    
                
            
                </PostsList>
                </PostsContainer>
                </Posts>
                
    
                
                
        </>  
        )

    }


}
export default PostsPage;