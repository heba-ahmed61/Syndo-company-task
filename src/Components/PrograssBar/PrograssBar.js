import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5 ,
    [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    
    },
    [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    color:"pink" ,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
    return (
    <Box sx={{ position: 'relative' }}>
        
    </Box>
    );
}

const CustomizedProgressBars = ()=> {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <FacebookCircularProgress />
        <br />
        <BorderLinearProgress variant="determinate" value={60} style={{width:"94%" }} />
    </Box>
    );
}
export default CustomizedProgressBars