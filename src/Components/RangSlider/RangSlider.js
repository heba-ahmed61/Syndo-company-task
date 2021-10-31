import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSliderComponent() {
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
    <Box sx={{ width: "70%" }}>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        />
    </Box>
    );
}


