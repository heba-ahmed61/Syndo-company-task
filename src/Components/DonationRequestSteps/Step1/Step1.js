import React, { useState } from 'react' ;
import { InvestContainer, InvestStep1, Step1Col1, RequestInfo ,Step1Row , Step1Col2, Step1Col3,
    InvestRequest, CurrentBalance, CurrentBalanceValue, Roi 
    , RoiValue, RiskTitle, RiskDecs, Checked, CheckedSpan, CheckedSpanNext, RangeSliderTitle
    , RangeSlider , Slider, PostSummaryTitle ,PostSummary, PostSummaryDetails, PostSummaryDetailsBold, Requeststep1Buttons, CancelButton, NextButton, Close
} from './Step1Style';
import StepperComponent from '../../Stepper/Stepper';
import RangeSliderComponent from '../../RangSlider/RangSlider';
import { CloseButton } from '../Step2/Step2Style';


const Step1 = (props) =>{





    
    

    return(
        <InvestStep1>
        
            <InvestContainer>
                <Close onClick={()=> props.setInvestStep1(false)} >x</Close>
                <Step1Row>
                    <Step1Col1>
                        <StepperComponent/>
                    
                    </Step1Col1>
                    <Step1Col2>
                        <InvestRequest>
                            Investment Request
                        </InvestRequest>
                        <RequestInfo>
                            <CurrentBalance>
                            Current Available Balance
                            </CurrentBalance>
                            <CurrentBalanceValue>50,000 EGP</CurrentBalanceValue>
                            <RangeSlider>
                                <RangeSliderTitle>
                                    Amount (required)
                                </RangeSliderTitle>
                                <Slider>
                                <RangeSliderComponent/>
                                </Slider>
                            </RangeSlider>
                        </RequestInfo>
                        <Roi>Expected ROI</Roi>
                        <RoiValue>100 EGP</RoiValue>
                        <RiskTitle>
                        Risk Disclaimer
                        </RiskTitle>
                        <RiskDecs>
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </RiskDecs>
                        <Checked type = "checkbox"></Checked>
                        <CheckedSpan>By clicking <CheckedSpanNext>Next</CheckedSpanNext> you agree syndo's <CheckedSpanNext>terms</CheckedSpanNext></CheckedSpan>
                        <Requeststep1Buttons>
                            <CancelButton onClick={()=> props.setInvestStep1(false)} >Cancel</CancelButton>
                            <NextButton onClick={()=>props.handelSteps(true , false)} >Next</NextButton>
                        </Requeststep1Buttons>
                    </Step1Col2>
                    <Step1Col3>
                        <PostSummary>
                            <PostSummaryTitle>Post Summary</PostSummaryTitle>
                            <PostSummaryDetails>Post</PostSummaryDetails>
                            <PostSummaryDetailsBold>Post Title</PostSummaryDetailsBold>
                            <PostSummaryDetails>Tenor</PostSummaryDetails>
                            <PostSummaryDetailsBold>2 months</PostSummaryDetailsBold>
                            <PostSummaryDetails>Total Raised</PostSummaryDetails>
                            <PostSummaryDetailsBold>50,000 EGP (40%) 250,000 EGP</PostSummaryDetailsBold>
                            <PostSummaryDetails>Expected Net ROI</PostSummaryDetails>
                            <PostSummaryDetailsBold>2%</PostSummaryDetailsBold>
                            
                        </PostSummary>
                    </Step1Col3>

                </Step1Row>
            </InvestContainer>
                        

        </InvestStep1>
        
    )
}

export default Step1;