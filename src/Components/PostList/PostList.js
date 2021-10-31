import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ColTitle, ColTitleData, PostDate, PostDescription, PostInfo, PostInfoCol, PostInfoRow, PostsDate, PostTitle ,
    RowContainer , ActionButton, PrograssBar, SpanBrograss, CardContainer ,Badge ,DetailsLink
} from './PostListStyle';
import  CustomizedProgressBars from '../PrograssBar/PrograssBar';


export default function MediaCard(props) {
    return (
        
        
    <CardContainer>
        <DetailsLink href ={`/postdetails/${props.post.postId}`}>
        
    <Card sx={{ maxWidth: "100%" }}>
    <Badge>{props.post.badge}</Badge>
        <CardMedia
        component="img"
        height="140"
        image={props.post.postImage}
        
        
        />
        <CardContent>
        <PostInfo>
                <postsTitle>
                    <PostTitle>{props.post.postTitle}</PostTitle>
                </postsTitle>
                <PostsDate>
                    <PostDate>{props.post.date}</PostDate>
                </PostsDate>
            </PostInfo>
        <Typography gutterBottom variant="h5" component="div">
        <PostDescription>{props.post.postDescription}</PostDescription>
            
        </Typography>
        <PrograssBar>
            <CustomizedProgressBars/>
            <SpanBrograss>
            {` ${props.post.prograssbar}%`}
                </SpanBrograss>
            
        </PrograssBar>
        <RowContainer>
        <PostInfoRow>
            <PostInfoCol>
                <ColTitle>Goal</ColTitle>
                <ColTitleData>{props.post.postInformation[0].fundingGoal}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>rate</ColTitle>
                <ColTitleData>{`${props.post.postInformation[1].interestRate}%`}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle>Tenor</ColTitle>
                <ColTitleData>{props.post.postInformation[2].tenor}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> invested</ColTitle>
                <ColTitleData>{props.post.postInformation[3].totalInvested}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Investors</ColTitle>
                <ColTitleData>{props.post.postInformation[4].investors}</ColTitleData>
            </PostInfoCol>
            <PostInfoCol>
            <ColTitle> Skingame</ColTitle>
                <ColTitleData>{`${props.post.postInformation[5].skinInTheGame}%`}</ColTitleData>
            </PostInfoCol>
        </PostInfoRow>
            
        
            
            </RowContainer>
        
    
        </CardContent>
        <CardActions>
        <ActionButton size="small">Loan</ActionButton>
        <ActionButton size="small">Industry</ActionButton>
        </CardActions>
    </Card>
    </DetailsLink>
    </CardContainer>
    
    );
}