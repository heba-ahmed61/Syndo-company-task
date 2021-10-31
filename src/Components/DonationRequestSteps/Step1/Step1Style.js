import styled from 'styled-components';

export const InvestStep1 = styled.div`
background-color:white;
margin:100px auto ;
position:absolute;
top:0;
left:50%;
transform:translateX(-50%);
width:69%;
border:1px solid rgba(0,0,0,.2);
border-radius:10px;
padding:10px 0;
box-shadow: 2px 2px #f4f4f4;
z-index:50;
@media only screen and (min-width:768.9px) and (max-width:1200px){
    width:80%;
}
@media only screen and (max-width:767.9px){
    width:95%;
}

`
export const InvestContainer = styled.div.attrs({

    className: 'container'
})``
export const Close = styled.div`position:absolute;
top:5px;
right:30px;
font-size:24px;
cursor:Pointer;
@media only screen and (max-width:767.9px){
    right:10px;
}
`
export const Step1Row = styled.div.attrs({

    className:'row'
})`margin-top:60px;
@media only screen and (max-width:767.9px){
    margin-top:0px
}
`
export const Step1Col1 = styled.div.attrs({

    className : 'col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-12'
})`margin:60px auto 0; text-align:center;


`
export const Step1Col2 = styled.div.attrs({

    className : 'col-xxl-5 col-xl-5 col-lg-5  col-md-9 col-12'
})``
export const Step1Col3 = styled.div.attrs({

    className : ' col-xxl-4 col-xl-4 col-lg-6  col-md-12 col-12'
})`margin:30px auto 0;`

export const InvestRequest = styled.h5``
export const RequestInfo  = styled.div``
export const CurrentBalance = styled.p`font-size:13px; margin-top:20px;`
export const CurrentBalanceValue = styled.h6`font-size:13px; `
export const Roi = styled.p`font-size:13px;`
export const RoiValue = styled.h6`font-size:13px; `
export const RiskTitle = styled.h6`font-size:13px; `
export const RiskDecs = styled.p`font-size:12px; margin-bottom:20px;`
export const CheckedSpan = styled.span`font-size:13px; margin-left : 7px; `
export const Checked = styled.input`padding:5px !important; color:black;`
export const CheckedSpanNext = styled.span`font-weight:bold`
export const RangeSlider = styled.div`font-size:13px;`
export const RangeSliderTitle = styled.p`font-size:13px;`
export const Slider = styled.div``
export const PostSummary = styled.div`background:rgba(240, 233, 233 ,.5); padding:50px 30px;
border-radius:10px; box-shadow: 2px 2px #f4f4f4;
margin-bottom:70px;
`
export const PostSummaryTitle = styled.h5`font-weight:bold; text-align:center `
export const PostSummaryDetails = styled.h6`font-size:13px ;  `
export const PostSummaryDetailsBold = styled.p`font-size:13px ; font-weight:bold`
export const Requeststep1Buttons = styled.div`margin:50px 0; text-align:center;`
export const CancelButton = styled.button`border:none; background:transparent`
export const NextButton = styled.button`margin-left:20px; color:white; background-color:#00abc1;
border:none; padding:5px 40px; border-radius:4px;
`
