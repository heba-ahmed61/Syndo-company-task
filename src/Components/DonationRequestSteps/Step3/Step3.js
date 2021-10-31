import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { InvestStep3, InvestStep3Container, Step3Pragraph, CloseButton, Step3Title , Step3Container, Step3PragraphBold, DownloadLink, FinshPragraph, Requeststep3Button, Step3Close} from './Step3Style';

const Step3 = (props) =>{

    return(
        
        <InvestStep3>
            <InvestStep3Container>
                <CloseButton onClick={()=> props.setStep3(false)}>x</CloseButton>
                <Step3Container>
                <Step3Title>Thank you!</Step3Title>
                <Step3Pragraph>Your investment request created successfully</Step3Pragraph>
                <Step3Pragraph>Investment Ref</Step3Pragraph>
                <Step3PragraphBold>#SYINV000001</Step3PragraphBold>
                <Step3Pragraph>Investment Amount</Step3Pragraph>
                <Step3PragraphBold>500 EGP</Step3PragraphBold>
                <Step3Pragraph>Post</Step3Pragraph>
                <Step3PragraphBold>Post Title</Step3PragraphBold>
                <Step3Pragraph>Investment Agreements</Step3Pragraph>
                <DownloadLink href = "#">Download here</DownloadLink>
                <FinshPragraph>
                    Investement amount will be deduceted on<br/>
                    post complation , you can cancel your investment <br/>
                    before complation from <DownloadLink href = "#"> here</DownloadLink>
                </FinshPragraph>
                <Requeststep3Button>
                    <Step3Close onClick={()=> props.setStep3(false)} >Close</Step3Close>
                </Requeststep3Button>

                </Step3Container>
            </InvestStep3Container>
        </InvestStep3>
    )
}

export default Step3;