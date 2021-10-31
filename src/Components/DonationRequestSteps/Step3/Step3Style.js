import styled from 'styled-components';

export const InvestStep3 = styled.div`
background-color:white;
margin:60px auto;
position:absolute;
top:0;
left:50%;
transform:translateX(-50%);
width:69%;
border:1px solid rgba(0,0,0,.2);
border-radius:10px;
padding:5px 0;
box-shadow: 2px 2px #f4f4f4;
z-index:50;
@media only screen and (min-width:768.9px) and (max-width:1200px){
    width:80%;
}
@media only screen and (max-width:767.9px){
    width:95%;
}
`
export const InvestStep3Container = styled.div`
margin:50px auto 30px  ;
display: flex;
justify-content: center;
;

`
export const Step3Container = styled.div`margin-top:30px;`
export const Step3Title = styled.h5`text-align:center;margin-bottom:20px;`
export const Step3Pragraph = styled.p`font-size:13px;`
export const Step3PragraphBold = styled.h6`font-size:12px ; font-weight:bold;margin-bottom:25px;`
export const DownloadLink = styled.a`color:black; font-size:13px ; font-weight:bold;`
export const FinshPragraph = styled.div`margin:30px 0; font-size:13px;`
export const Step3Close = styled.button`margin-left:20px; color:white; background-color:#00abc1;
border:none; padding:5px 50px; border-radius:4px;

`
export const Requeststep3Button = styled.div`margin:30px 0; text-align:center;`
export const CloseButton = styled.div`position:absolute;
top:5px;
right:30px;
font-size:24px;
cursor:Pointer;
@media only screen and (max-width:767.9px){
    right:10px;
}`
