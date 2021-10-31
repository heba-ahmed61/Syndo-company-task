import React from "react";
import { Description, HomeContainer, HomePage, ShowCase, ShowCaseContent, ShowCaseDetails, ShowCaseImage
, ShowCaseTitle, SubTitle , ShowCaseLink, OurDoers, Doers, DoersList, DeorsTitle, DoersDescription,
Company ,
CompanyLogo,
CompanyDetails,
ComapnyInfo , CompanyName, ComapanyImage, Featured, FeaturedTitle, FeaturedSlider, SliderImages, SliderItem ,ExplorePosts,ExplorePostsTitle, PostsSlider, HomePicture} from "./HomeStyle";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  Navbar  from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import {Link } from 'react-router-dom';
import data from '../../Posts.json';
import { ColTitle, ColTitleData, PostDate, PostDescription, PostInfo, PostInfoCol, PostInfoRow, PostsDate, PostTitle ,
    RowContainer , ActionButton, PrograssBar, SpanBrograss,Badge ,
} from '../../Components/PostList/PostListStyle';
import CustomizedProgressBars from "../../Components/PrograssBar/PrograssBar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import homeImage from '../../assest/images/homeimage.png';



const Home = () =>{
    const responsive = {

        0: {
            items: 2.3,
        
        },
        450: {
            items:2.3,
        


        },
        600: {
            items: 3,
        


        },
        768:{
            items: 3.5,
        

        },
        1000: {
            items: 5,
        
            

        },
    }

    const HomePostsSlider= {

        0: {
            items: 1,
        

        },
        450: {
            items: 1,
        


        },
        600: {
            items: 1,
        


        },
        768:{
            items: 2.2,
        

        },
        900:{
            items : 2.4
        },
        1000: {
            items: 3,
        

        },
        1500:{
            items:4,
        }
    }



    return(
        <>
        <Navbar/>
        <HomePage>
            <HomeContainer>
                <ShowCase>
                    <ShowCaseContent>
                        <ShowCaseDetails>
                        <ShowCaseTitle>BUILT BY THE CROWD FOR THE CROWD</ShowCaseTitle>
                        <SubTitle>
                            The Leading Digital <br/>Donations Platform in Egypt
                
                        </SubTitle>
                        <Description>
                        The Leading Digital Donations Platform in Egypt
                        </Description>
                        <ShowCaseLink>Get started</ShowCaseLink>
                        </ShowCaseDetails>
                        <ShowCaseImage>
                            <HomePicture src={homeImage}/>
                        </ShowCaseImage>
                    </ShowCaseContent>
                </ShowCase>
                
                <ExplorePosts>
                    <Link to = "/posts" style={{textDecoration:"none"}}>
                    <ExplorePostsTitle>Explore Posts</ExplorePostsTitle>
                    </Link>
                    <PostsSlider>
                    <OwlCarousel className="owl-theme postsSlider" loop margin={10} nav={true} items={4}
                    dots= {false} responsive={HomePostsSlider} >
                    
                        <Link to = "/posts" style={{textDecoration:"none"}}>
                        <SliderItem>
                        <Card sx={{ maxWidth: "100%" }}>
                        <Badge>{data.posts[0].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={data.posts[0].postImage}
        
        
                        />
                        <CardContent>
                    <PostInfo>
                        <postsTitle>
                        <PostTitle>{data.posts[0].postTitle}</PostTitle>
                        </postsTitle>
                            <PostsDate>
                    <PostDate>{data.posts[0].date}</PostDate>
                    </PostsDate>
                    </PostInfo>
                    <Typography gutterBottom variant="h5" component="div">
                    <PostDescription>{data.posts[0].postDescription}</PostDescription>
            
                    </Typography>
                    <PrograssBar>
                    <CustomizedProgressBars/>
                        <SpanBrograss>
            {` ${data.posts[0].prograssbar}%`}
                </SpanBrograss>
            
                </PrograssBar>
                <RowContainer>
                <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{data.posts[0].postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${data.posts[0].postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{data.posts[0].postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{data.posts[0].postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{data.posts[0].postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${data.posts[0].postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
        </PostInfoRow>
            
        
            
            </RowContainer>
        
    
                    </CardContent>
                    <CardActions>
                    <ActionButton size="small">Loan</ActionButton>
                <ActionButton size="small">Industry</ActionButton>
                </CardActions>
                    </Card>

                        </SliderItem>
                        </Link>
                        <Link to = "/posts" style={{textDecoration:"none"}}>
                        <SliderItem>
                        <Card sx={{ maxWidth: "100%" }}>
                        <Badge>{data.posts[1].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={data.posts[1].postImage}
        
        
                        />
                        <CardContent>
                    <PostInfo>
                        <postsTitle>
                        <PostTitle>{data.posts[1].postTitle}</PostTitle>
                        </postsTitle>
                            <PostsDate>
                    <PostDate>{data.posts[1].date}</PostDate>
                    </PostsDate>
                    </PostInfo>
                    <Typography gutterBottom variant="h5" component="div">
                    <PostDescription>{data.posts[1].postDescription}</PostDescription>
            
                    </Typography>
                    <PrograssBar>
                    <CustomizedProgressBars/>
                        <SpanBrograss>
            {` ${data.posts[1].prograssbar}%`}
                </SpanBrograss>
            
                </PrograssBar>
                <RowContainer>
                <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${data.posts[1].postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${data.posts[1].postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
            </PostInfoRow>
            
        
            
            </RowContainer>
            </CardContent>
                <CardActions>
                    <ActionButton size="small">Loan</ActionButton>
                    <ActionButton size="small">Industry</ActionButton>
                        </CardActions>
                    </Card>
        
    
        
                        </SliderItem>
                        </Link>
                        <Link to = "/posts" style={{textDecoration:"none"}}>
                        <SliderItem>
                        <Card sx={{ maxWidth: "100%" }}>
                        <Badge>{data.posts[2].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={data.posts[2].postImage}
        
        
                        />
                        <CardContent>
                    <PostInfo>
                        <postsTitle>
                        <PostTitle>{data.posts[2].postTitle}</PostTitle>
                        </postsTitle>
                            <PostsDate>
                    <PostDate>{data.posts[2].date}</PostDate>
                    </PostsDate>
                    </PostInfo>
                    <Typography gutterBottom variant="h5" component="div">
                    <PostDescription>{data.posts[2].postDescription}</PostDescription>
            
                    </Typography>
                    <PrograssBar>
                    <CustomizedProgressBars/>
                        <SpanBrograss>
            {` ${data.posts[2].prograssbar}%`}
                </SpanBrograss>
            
                </PrograssBar>
                <RowContainer>
                <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{data.posts[2].postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${data.posts[2].postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{data.posts[2].postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{data.posts[2].postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{data.posts[2].postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${data.posts[2].postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
        </PostInfoRow>
            
        
            
            </RowContainer>
        
    
                </CardContent>
                    <CardActions>
                        <ActionButton size="small">Loan</ActionButton>
                            <ActionButton size="small">Industry</ActionButton>
                            </CardActions>
                    </Card>

                        </SliderItem>
                        </Link>
                        <Link to = "/posts" style={{textDecoration:"none"}}>
                        <SliderItem>
                        <Card sx={{ maxWidth: "100%" }}>
                        <Badge>{data.posts[3].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={data.posts[3].postImage}
        
        
                        />
                        <CardContent>
                    <PostInfo>
                        <postsTitle>
                        <PostTitle>{data.posts[3].postTitle}</PostTitle>
                        </postsTitle>
                            <PostsDate>
                    <PostDate>{data.posts[3].date}</PostDate>
                    </PostsDate>
                    </PostInfo>
                    <Typography gutterBottom variant="h5" component="div">
                    <PostDescription>{data.posts[0].postDescription}</PostDescription>
            
                    </Typography>
                    <PrograssBar>
                    <CustomizedProgressBars/>
                        <SpanBrograss>
            {` ${data.posts[3].prograssbar}%`}
                </SpanBrograss>
            
                </PrograssBar>
                <RowContainer>
                <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{data.posts[3].postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${data.posts[3].postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{data.posts[3].postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{data.posts[3].postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{data.posts[3].postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${data.posts[3].postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
        </PostInfoRow>
            
        
            
            </RowContainer>
        
    
                        </CardContent>
                        <CardActions>
                            <ActionButton size="small">Loan</ActionButton>
                            <ActionButton size="small">Industry</ActionButton>
                        </CardActions>
                    </Card>

                        </SliderItem>
                        </Link>
                        <Link to = "/posts" style={{textDecoration:"none"}}>
                        <SliderItem>
                        <Card sx={{ maxWidth: "100%" }}>
                        <Badge>{data.posts[1].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={data.posts[1].postImage}
        
        
                        />
                        <CardContent>
                    <PostInfo>
                        <postsTitle>
                        <PostTitle>{data.posts[1].postTitle}</PostTitle>
                        </postsTitle>
                            <PostsDate>
                    <PostDate>{data.posts[1].date}</PostDate>
                    </PostsDate>
                    </PostInfo>
                    <Typography gutterBottom variant="h5" component="div">
                    <PostDescription>{data.posts[1].postDescription}</PostDescription>
            
                    </Typography>
                    <PrograssBar>
                    <CustomizedProgressBars/>
                        <SpanBrograss>
            {` ${data.posts[1].prograssbar}%`}
                </SpanBrograss>
            
                </PrograssBar>
                <RowContainer>
                <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${data.posts[1].postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{data.posts[1].postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${data.posts[1].postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
        </PostInfoRow>
            
        
            
            </RowContainer>
        
    
                        </CardContent>
                        <CardActions>
                            <ActionButton size="small">Loan</ActionButton>
                                <ActionButton size="small">Industry</ActionButton>
                                </CardActions>
                            </Card>

                        </SliderItem>
                        </Link>
                        

                    </OwlCarousel>
                        
                    </PostsSlider>
                </ExplorePosts>
                <OurDoers>
                    <DeorsTitle>Hear it from our doers</DeorsTitle>
                    <Doers>
                        <DoersList>
                            <DoersDescription>
                            ‘‘Lorem Ipsum is simply dummy<br/> text of the printing and <br/> typesetting industry" 
                            </DoersDescription>
                            <Company>
                            <CompanyLogo>
                                <ComapanyImage src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg">
                                    
                                </ComapanyImage>

                            </CompanyLogo>
                            <CompanyDetails>
                            <ComapnyInfo>Jan Deo</ComapnyInfo>
                            <CompanyName>company XYZ-CEO</CompanyName>
                            </CompanyDetails>
                        </Company>
                        </DoersList>
                        
                        <DoersList>
                            <DoersDescription>
                            ‘‘Lorem Ipsum is simply dummy<br/> text of the printing and <br/> typesetting industry" 
                            </DoersDescription>
                            <Company>
                            <CompanyLogo>
                                <ComapanyImage src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg">
                                    
                                </ComapanyImage>

                            </CompanyLogo>
                            <CompanyDetails>
                            <ComapnyInfo>Jan Deo</ComapnyInfo>
                            <CompanyName>company XYZ-CEO</CompanyName>
                            </CompanyDetails>
                        </Company>
                        </DoersList>
                        <DoersList>
                            <DoersDescription>
                            ‘‘Lorem Ipsum is simply dummy<br/> text of the printing and  typesetting industry" 
                            </DoersDescription>
                            <Company>
                            <CompanyLogo>
                                <ComapanyImage src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg">
                                    
                                </ComapanyImage>

                            </CompanyLogo>
                            <CompanyDetails>
                            <ComapnyInfo>Jan Deo</ComapnyInfo>
                            <CompanyName>company XYZ-CEO</CompanyName>
                            </CompanyDetails>
                        </Company>
                        </DoersList>
                    </Doers>
                </OurDoers>
                <Featured>
                    <FeaturedTitle>Featured by Industry Leaders</FeaturedTitle>
                </Featured>
                <FeaturedSlider>
                <OwlCarousel className='owl-theme' loop
                margin={20} 
                nav
                items={5}
                dots={false}
                responsive = {responsive}
            
        
                >
                    <SliderItem class='item'>
                    <SliderImages src ="https://media-exp1.licdn.com/dms/image/C4D0BAQFilbKeNciLkA/company-logo_200_200/0/1626179167821?e=2159024400&v=beta&t=1M8GLnbMoNF_ZvCNGSBj7507_vm730kM4wVLrlInpMw"></SliderImages>
                    </SliderItem>
                    <SliderItem class='item'>
                    <SliderImages src ="https://mk0wayamediakm0sbbyp.kinstacdn.com/wp-content/uploads/sites/2/2021/10/Fintech-Galaxy-780x470-1.png"></SliderImages>

                        </SliderItem>
                        <SliderItem class='item'>
                        <SliderImages src = "data:image/jpeg;base64,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"></SliderImages>

                        </SliderItem>
                        <SliderItem class='item'>
                    
                        <SliderImages src  = "https://yt3.ggpht.com/ytc/AKedOLQazfKgm5jLXjTCHf8YrNcgYDFlaivq_PLmP-GVlQ=s900-c-k-c0x00ffffff-no-rj"></SliderImages>
                        </SliderItem>
                        <SliderItem class='item'>
                        <SliderImages src= "data:image/png;base64,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"></SliderImages>

                        </SliderItem>
                        <SliderItem class='item'>
                        <SliderImages src = "data:image/jpeg;base64,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"></SliderImages>

                        </SliderItem>
                        <SliderItem class='item'>
                    
                        <SliderImages src  = "https://yt3.ggpht.com/ytc/AKedOLQazfKgm5jLXjTCHf8YrNcgYDFlaivq_PLmP-GVlQ=s900-c-k-c0x00ffffff-no-rj"></SliderImages>
                        </SliderItem>
                        <SliderItem class='item'>
                        <SliderImages src= "data:image/png;base64,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"></SliderImages>

                        </SliderItem>
                        </OwlCarousel>
    
            </FeaturedSlider>
        
    

            </HomeContainer>
        </HomePage>
        </>
    )
}
export default Home;