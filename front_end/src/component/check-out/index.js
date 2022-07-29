import React from 'react'
import './style.css'
import {Autocomplete, Box, Grid, InputAdornment, Stack, TextField} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {MobileTimePicker} from "@mui/x-date-pickers";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from "@mui/material/Button";


export default function CheckOut() {
    const [value, setValue] = React.useState(new Date());
    const driver = [{label: 'Mr.Amarabandu'}, {label: 'Mr.Roopasinghe'}, {label: 'Mr.Saman'},{label: 'Mr.Amal'}];


    return (
        <div className='check_out'>
            <div>
                <label>Check Out</label>
                <div>
                    <div className='pickers_con'>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                className="date"
                                label="Departure Date"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size='small' className='date' {...params} />}
                            />
                            <MobileTimePicker
                                label="Departure Time"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size='small'
                                                                    className='leaving_time' {...params} />}
                            />
                            <MobileDatePicker
                                className="date"
                                label="Returning Date"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size='small'
                                                                    className=' return_date' {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <Autocomplete
                            id="transmission-select-demo"
                            sx={{width: '100%'}}
                            size='small'
                            validators={['required']}
                          /*  onInputChange={(event, value) => {
                                const temp = formData;
                                temp.transmission = value;
                                setFormData(temp);
                                console.log(formData.transmission)
                            }}*/
                            options={driver}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                    {option.label}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Select your driver"
                                    inputProps={{
                                        ...params.inputProps,
                                        readOnly: true,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
                <div></div>

            </div>
        </div>
    )
}
