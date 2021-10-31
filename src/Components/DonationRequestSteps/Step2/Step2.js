import React from 'react';
import { InputsLabel, InvestAmount, InvestAmountinfo, InvestStep2, InvestStep2Request, Step2Col1, Step2Col2, Step2Col3,

    Step2Container, Step2Inputs, Step2Row , InputValue, InputChecked,
    InputCheckedSpan ,InvestButton,Requeststep2Buttons,  InputCheckedSpanNext, BackButton ,
    PostSummary , PostSummaryDetails ,PostSummaryDetailsBold ,PostSummaryTitle, CloseButton} from './Step2Style';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
const steps = [
    {
    label: '',
    description: ``,
    },
    {
    label: '',
    description:'',
    }

];

const Step2 = (props) =>{

    
        const [activeStep, setActiveStep] = React.useState(1);

        const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

    const handleReset = () => {
    setActiveStep(0);
    };

        return(
            <InvestStep2>
                <Step2Container>
                    <CloseButton onClick={()=> props.setStep2(false)}>x</CloseButton>
                    <Step2Row>
                    <Step2Col1>
                    <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
            <Step key={step.label}>
            <StepLabel
                optional={
                index === 2 ? (
                    <Typography variant="caption"></Typography>
                ) : null
                }
            >
                {step.label}
            </StepLabel>
            <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                <div>
                    
                
                </div>
                </Box>
            </StepContent>
            </Step>
        ))}
        </Stepper>
        {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
            </Button>
        </Paper>
        )}
    </Box>
                        
                    </Step2Col1>
                    <Step2Col2>
                        <InvestStep2Request>Investment Request</InvestStep2Request>
                        <InvestAmount>
                            <InvestAmountinfo>Invest Amount</InvestAmountinfo>
                            <InvestAmountinfo>500 EGP</InvestAmountinfo>
                            <InvestAmountinfo>please enter yoy card details to secure your investment.<br></br>Cash only be deducted on campaign completion.</InvestAmountinfo>
                            <Step2Inputs>
                                <InputsLabel>
                                Card holder name
                                </InputsLabel>
                                <InputValue placeholder="Jone Deo" type="text">
                                </InputValue>
                            </Step2Inputs>
                            <Step2Inputs>
                                <InputsLabel>
                                Card number
                                </InputsLabel>
                                <InputValue placeholder="**** **** **** ****" type="password">
                                </InputValue>
                            </Step2Inputs>
                            <Step2Inputs>
                                <InputsLabel>
                                Expiry data
                                </InputsLabel>
                                <InputValue placeholder="12/23" type="number">
                                </InputValue>
                            </Step2Inputs>
                            <Step2Inputs>
                                <InputsLabel>
                                CVV
                                </InputsLabel>
                                <InputValue placeholder="***" type="password">
                                </InputValue>
                            </Step2Inputs>
                            <Step2Inputs>
                                <InputChecked type ="checkbox"></InputChecked>
                                <InputCheckedSpan>Save card for future investments</InputCheckedSpan>
                            </Step2Inputs>
                            <Step2Inputs>
                                <InputChecked type ="checkbox"></InputChecked>
                                <InputCheckedSpan>By clicking <InputCheckedSpanNext>Next</InputCheckedSpanNext> you agree syndo's <InputCheckedSpanNext>terms</InputCheckedSpanNext></InputCheckedSpan>
                            </Step2Inputs>
                            <Requeststep2Buttons>
                                <BackButton onClick={()=> props.handelBack(false , true)}>Back</BackButton>
                                <InvestButton onClick={()=> props.handelInvest(true  , false)}>Invest 500 EGP</InvestButton>
                            </Requeststep2Buttons>


                        </InvestAmount>
                    </Step2Col2>
                    <Step2Col3>
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
                    </Step2Col3>
                </Step2Row>
                </Step2Container>
        </InvestStep2>
    )
}

export default Step2;