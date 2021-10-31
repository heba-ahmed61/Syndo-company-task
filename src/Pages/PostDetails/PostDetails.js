import React  ,{useState}from "react";
import { useParams } from "react-router-dom";
import data from '../../Posts.json';
import {  PostsDetails , PostDetailsContainer , PostDetailsContent , PostDetailsContentImage, PostDetailsImage,
    PostDetailsTitle, PostDetailsRow, PostDetailsInfo, PostRaised ,PostsInfoCol, Buttons,
    PostButtons, PostIcons , Icon, Invest, InvestButton , Tabs , CardPost, CamelVenturesImage, CamelImage, SyndoImage, SyndoInvestImage} from "../PostDetails/PostDetailsStyle";
import LabTabs from "../../Components/Tabs/Tabs";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ColTitle, ColTitleData, PostDate, PostDescription, PostInfo, PostInfoCol, PostInfoRow, PostsDate, PostTitle ,
    RowContainer , ActionButton, PrograssBar, SpanBrograss, CardContainer ,Badge ,DetailsLink
} from '../../Components/PostList/PostListStyle';
import  CustomizedProgressBars from '../../Components/PrograssBar/PrograssBar';
import Image1 from '../../assest/images/pic1.png';
import Image2 from '../../assest/images/pic2.png';
import Step1 from "../../Components/DonationRequestSteps/Step1/Step1";
import Step2 from "../../Components/DonationRequestSteps/Step2/Step2";
import Step3 from "../../Components/DonationRequestSteps/Step3/Step3";
import LoginHeader from "../../Components/LoginHeader/LoginHeader";

const PostDetails = () =>{

    const {id} = useParams();
    const post = data.posts.filter(post => post.postId == id)
    const [ investStep1 , setInvestStep1] = useState(false);
    const [ step2 , setStep2] = useState(false)
    const [step3 , setStep3] =useState(false)
    const handelSteps = (step2, Step1) =>{

        setStep2(step2)
        setInvestStep1(Step1)

        
        
    }
    const handelStep2 =()=>{

        setInvestStep1(true)
        setStep2(false)
        setStep3(false)
        

    }
    const handelBack =(value1, value2) =>{
        
        setStep2(value1)
        setInvestStep1(value2)
    }
    const handelInvest = (valueTrue , valueFalse)=>{

        setStep3(valueTrue)
        setStep2(valueFalse)
    }

    

    return(
        <>
        <LoginHeader  />
        
        <PostsDetails>
            
        
            <PostDetailsContainer>
                <PostDetailsContent>
                {investStep1 && (<Step1 investStep1={investStep1} setInvestStep1={setInvestStep1}
            
                handelSteps={handelSteps}
                />)}
                {step2 && (<Step2 step2={step2} setStep2={setStep2} handelBack={handelBack} handelInvest={handelInvest}/>)}
                {step3 && (<Step3 step3={step3}  setStep3={setStep3}/>)}
                    <PostDetailsRow>
                        <PostDetailsInfo>
                    <PostDetailsContentImage>
                        <PostDetailsImage src = {post[0].postImage}></PostDetailsImage>
                    </PostDetailsContentImage>
                    <PostDetailsTitle>{post[0].postTitle}</PostDetailsTitle>
                    <PostRaised>
                        100,00 EGP raised
                    </PostRaised>
                    <Buttons>
                    <PostButtons >Loan</PostButtons>
                    <PostButtons>Industry</PostButtons>
                    </Buttons>
                    <PostIcons>
                        <Icon>
                        <i class="fas fa-globe"></i>
                        </Icon>
                        <Icon>
                        <i class="fab fa-facebook-f"></i>
                        </Icon>
                        <Icon>
                        <i class="fab fa-instagram"></i>
                        </Icon>
                        <Icon>
                        <i class="fab fa-linkedin-in"></i>
                        </Icon>
                    </PostIcons>
                    <Invest>
                        <InvestButton onClick={handelStep2}
                        >Invest Now</InvestButton>
                        </Invest>
                    <Tabs>
                        <LabTabs/>
                    </Tabs>
                    </PostDetailsInfo>
                    <PostsInfoCol>
                    <CardContainer>
                        <CardPost>
                        <Card style={{maxWidth:"100%;" }}>
                        <Badge>{post[0].badge}</Badge>
                        <CardMedia
                        component="img"
                        height="140"
                        image={post[0].postImage}
        
        
                        />
                        <CardContent>
                        <PostInfo>
                            <postsTitle>
                            <PostTitle>{post[0].postTitle}</PostTitle>
                            </postsTitle>
                                <PostsDate>
                                <PostDate>{post[0].date}</PostDate>
                                </PostsDate>
                                </PostInfo>
                                <Typography gutterBottom variant="h5" component="div">
                                <PostDescription>{post[0].postDescription}</PostDescription>
            
                                </Typography>
                                <PrograssBar>
                                <CustomizedProgressBars/>
                                <SpanBrograss>
                                {` ${post[0].prograssbar}%`}
                                </SpanBrograss>
            
                                </PrograssBar>
                                <RowContainer>
                                <PostInfoRow>
                                <PostInfoCol>
                                <ColTitle>Goal</ColTitle>
                                    <ColTitleData>{post[0].postInformation[0].fundingGoal}</ColTitleData>
                                </PostInfoCol>
                                <PostInfoCol>
                                    <ColTitle>rate</ColTitle>
                                    <ColTitleData>{`${post[0].postInformation[1].interestRate}%`}</ColTitleData>
                                    </PostInfoCol>
                                        <PostInfoCol>
                                            <ColTitle>Tenor</ColTitle>
                                                <ColTitleData>{post[0].postInformation[2].tenor}</ColTitleData>
                                                    </PostInfoCol>
                                                    <PostInfoCol>
                                                    <ColTitle> invested</ColTitle>
                                                    <ColTitleData>{post[0].postInformation[3].totalInvested}</ColTitleData>
                                                        </PostInfoCol>
                                                            <PostInfoCol>
                                                                <ColTitle> Investors</ColTitle>
                                                                <ColTitleData>{post[0].postInformation[4].investors}</ColTitleData>
                                                                </PostInfoCol>
                                                                    <PostInfoCol>
                                                                    <ColTitle> Skingame</ColTitle>
                                                                        <ColTitleData>{`${post[0].postInformation[5].skinInTheGame}%`}</ColTitleData>
                                                                </PostInfoCol>
                                                    </PostInfoRow>
                                                        </RowContainer>
                                                        </CardContent>
                                                <CardActions>
                                            <ActionButton size="small">Loan</ActionButton>
                                            <ActionButton size="small">Industry</ActionButton>
                            </CardActions>
                            </Card>
                        </CardPost>
                        </CardContainer>
                        <CamelVenturesImage>
                        <CamelImage src = {Image1}></CamelImage>
                    </CamelVenturesImage>
                    <SyndoImage>
                        <SyndoInvestImage src = {Image2}></SyndoInvestImage>
                    </SyndoImage>
                
                    </PostsInfoCol>
                    
                    </PostDetailsRow>
                
                </PostDetailsContent>
            </PostDetailsContainer>
        </PostsDetails>
        
    </>
        
        
    )
}

export default PostDetails