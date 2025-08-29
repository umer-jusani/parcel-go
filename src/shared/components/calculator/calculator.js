import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Stack, TextField, MenuItem, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import SelectBox from '@/shared/form-control/select-box';
import { Quantity, SendFrom, SendTo } from '@/shared/constant/constant';
import InputField from '@/shared/form-control/InputField';
import UIButton from '@/shared/pure-components/button/button';
import { Calculate } from '@mui/icons-material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3, backgroundColor: "background.lightBlue" }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Calculator() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ borderRadius: 2, overflow: 'hidden', mx: "auto", mt: 2 }}>
            <Box sx={{ borderBottom: 0, }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="shipping calculator tabs"
                    variant="fullWidth"
                    sx={{
                        width: "100%",
                        '& .MuiTabs-flexContainer': {
                            width: '100%',
                        },
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                        '& .MuiTab-root': {
                            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textTransform: 'none',
                            fontSize: '16px',
                            minHeight: '60px',
                            flex: 1,
                            maxWidth: 'none',
                            width: '100%',
                            '&.Mui-selected': {
                                background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)',
                                color: 'white'
                            },
                            '&:not(:last-child)': {
                                marginRight: '2px'
                            }
                        }
                    }}
                >
                    <Tab label="Send Internationally" {...a11yProps(0)} sx={{ textWrap: "nowrap" }} />
                    <Tab label="Multiple Parcels" {...a11yProps(1)} sx={{ textWrap: "nowrap" }} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Stack direction="row" spacing={2} alignItems="flex-end">
                    <Stack direction="row" spacing={1} >
                        {/* Send From */}
                        <SelectBox items={SendFrom} label="Send From" sx={{ minWidth: 200 }} />

                        {/* Send To */}
                        <SelectBox items={SendTo} label="Send To" sx={{ minWidth: 200 }} />
                    </Stack>

                    <Stack direction="row" spacing={0}>

                        {/* Length */}
                        <Box sx={{ minWidth: 80, flex: 0.8 }}>
                            <InputField
                                label="Length"
                                type="number"
                                placeholder="L..."
                                sx={{ backgroundColor: "background.white" }}
                            />
                        </Box>

                        {/* Width */}
                        <Box sx={{ minWidth: 80, flex: 0.8 }}>
                            <InputField
                                label="Width"
                                type="number"
                                placeholder="W..."
                                sx={{ backgroundColor: "background.white" }}
                            />
                        </Box>

                        {/* Height */}
                        <Box sx={{ minWidth: 80, flex: 0.8 }}>
                            <InputField
                                label="Height"
                                type="number"
                                placeholder="W..."
                                sx={{ backgroundColor: "background.white" }}
                            />
                        </Box>
                    </Stack>

                    {/* Weight */}
                    <Box sx={{ minWidth: 120, flex: 1 }}>
                        <InputField
                            label="Weight"
                            type="number"
                            placeholder="Weight"
                            sx={{ backgroundColor: "background.white" }}
                        />
                    </Box>

                    {/* Get Quote Button */}
                    <Box sx={{ minWidth: 140 }}>
                        <UIButton
                            variant="contained"
                            sx={{
                                width: "100%",
                                minHeight: 56,
                                backgroundColor: 'success.main',
                                '&:hover': {
                                    backgroundColor: 'success.dark'
                                }
                            }}
                        >
                            Get A Quote
                        </UIButton>
                    </Box>
                </Stack>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <Stack direction="row" spacing={2} >

                    <Stack direction="row" spacing={0}>
                        {/* Send From */}
                        <SelectBox items={SendFrom} label="Send From" sx={{ minWidth: "100%" }} />

                        {/* Send To */}
                        <SelectBox items={SendTo} label="Send To" sx={{ minWidth: 200 }} />
                    </Stack>

                    {/* Quantity */}
                    <Box sx={{ minWidth: 100, flex: 0.8 }}>
                        <SelectBox
                            items={Quantity}
                            label="Quantity"
                            initValue={Quantity[0].value}
                        />
                    </Box>

                   

                    {/* Get Quote Button */}
                    <Box sx={{ minWidth: 140 }}>
                        <UIButton
                            variant="contained"
                            sx={{
                                width: "100%",
                                minHeight: 56,
                                backgroundColor: 'success.main',
                                '&:hover': {
                                    backgroundColor: 'success.dark'
                                }
                            }}
                        >
                            Get A Quote
                        </UIButton>
                    </Box>
                </Stack>
            </CustomTabPanel>
        </Box>
    );
}