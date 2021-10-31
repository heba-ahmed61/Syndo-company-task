import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { TabsContent, TabsContentTitle, TabsPragraph ,CompanyImage ,
    CompanyImageDiv, Traction, TractionTitle, TractionRow, TractionCol,
    TractionColTitle, TractionColInfo, Financial, FinancialTitle, FinancialRow,
    FinancialCol, FinancialColTitle, FinancialColInfo, GraphPictures, Graph1 ,Graph2, GraphTitle, GraphInfo, Clients,
    ClientsTitle, ClientRow, ClientCol, KeyImage, KeyTitle, Founding, FoundingTitle, FoundingRow, FoundingCol, FoundingImage,
    Name, Job ,ImageContainer } from './TabsStyle';
import Image3 from '../../assest/images/pic3.png';
import Image4 from '../../assest/images/graph1.png';
import Image5 from '../../assest/images/graph2.png';




const LabTabs = ()=> {
    const [value, setValue] = React.useState('2');

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' ,color:"black" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Pitch" value="1" />
            <Tab label="Company" value="2" />
        
            </TabList>
        </Box>
        <TabPanel value="1">
            <TabsContent>
                <TabsContentTitle>
                    Post OverView
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </TabsPragraph>
                <TabsContentTitle>
                    Post Purpos
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                TabsPragraph
                </TabsPragraph>
            </TabsContent>
        </TabPanel>
        <TabPanel value="2">
        <TabsContentTitle>
                    About the Comapany
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </TabsPragraph>
                <TabsContentTitle>
                Products and Services
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </TabsPragraph>
                <TabsContentTitle>
                Competitive LandScape
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </TabsPragraph>
                <TabsContentTitle>
                Comapny Size
                </TabsContentTitle>
                <TabsPragraph>
                    11-50 Employess
                </TabsPragraph>
                <TabsContentTitle>
                    Business Modal
                </TabsContentTitle>
                <TabsPragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </TabsPragraph>
                <CompanyImageDiv>
                    <CompanyImage src = {Image3}>

                    </CompanyImage>

                </CompanyImageDiv>
                <Traction>
                    <TractionTitle>Traction</TractionTitle>
                    <TractionRow>
                        <TractionCol>
                            <TractionColTitle>0</TractionColTitle>
                            <TractionColInfo>Numbers of customers</TractionColInfo>
                        </TractionCol>
                        <TractionCol>
                            <TractionColTitle>0</TractionColTitle>
                            <TractionColInfo>Active users</TractionColInfo>
                        </TractionCol>
                        <TractionCol>
                            <TractionColTitle>0</TractionColTitle>
                            <TractionColInfo>potential users</TractionColInfo>
                        </TractionCol>
                    </TractionRow>
                    

                </Traction>
                <Financial>
                    <FinancialTitle>Financial Performance</FinancialTitle>
                    <FinancialRow>
                        <FinancialCol>
                            <FinancialColTitle>0</FinancialColTitle>
                            <FinancialColInfo>sales Turnover</FinancialColInfo>
                        </FinancialCol>
                        <FinancialCol>
                            <FinancialColTitle>0</FinancialColTitle>
                            <FinancialColInfo>Gross Profit Margin</FinancialColInfo>
                        </FinancialCol>
                        <FinancialCol>
                            <FinancialColTitle>0</FinancialColTitle>
                            <FinancialColInfo>Comapny Valuation</FinancialColInfo>
                        </FinancialCol>
                    </FinancialRow>
                </Financial>
                <GraphPictures>
                    <GraphInfo>
                    <Graph1 src = {Image4}></Graph1>
                    <GraphTitle>Graph 1</GraphTitle>
                    </GraphInfo>
                    <GraphInfo>
                    <Graph2 src = {Image5}></Graph2>
                    <GraphTitle>Graph 2</GraphTitle>
                    </GraphInfo>

                </GraphPictures>
                <Clients>
                    <ClientsTitle>Key Clients</ClientsTitle>
                    <ClientRow>
                        <ClientCol>
                        <ImageContainer>
                        <KeyImage src= {Image3}></KeyImage>
                            </ImageContainer>
                            <KeyTitle>Client 1</KeyTitle>
                        </ClientCol>
                        <ClientCol>
                        <ImageContainer>
                        <KeyImage src= {Image3}></KeyImage>
                            </ImageContainer>
                            <KeyTitle>Client 2</KeyTitle>
                        </ClientCol>
                        <ClientCol>
                        <ImageContainer>
                        <KeyImage src= {Image3}></KeyImage>
                            </ImageContainer>
                        
                            <KeyTitle>Client 3</KeyTitle>
                        </ClientCol>
                    </ClientRow>
                </Clients>
                <Founding>
                    <FoundingTitle>
                        Founding Team
                    </FoundingTitle>
                    <FoundingRow>
                        <FoundingCol>
                        <ImageContainer>
                            <FoundingImage src= {Image3}></FoundingImage>
                            </ImageContainer>
                            <Name>Name</Name>
                            <Job>Job Title</Job>
                        </FoundingCol>
                        <FoundingCol>
                        <ImageContainer>
                            <FoundingImage src= {Image3}></FoundingImage>
                            </ImageContainer>
                            <Name>Name</Name>
                            <Job>Job Title</Job>
                        </FoundingCol>
                        <FoundingCol>
                            <ImageContainer>
                            <FoundingImage src= {Image3}></FoundingImage>
                            </ImageContainer>
                            <Name>Name</Name>
                            <Job>Job Title</Job>
                        </FoundingCol>
                    </FoundingRow>
                </Founding>
        

        </TabPanel>
    
        </TabContext>
    </Box>
    );
}
export default LabTabs;