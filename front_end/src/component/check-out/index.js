import React from 'react'
import './style.css'
import {
    Autocomplete,
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {MobileTimePicker} from "@mui/x-date-pickers";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'

export default function CheckOut() {
    const [value, setValue] = React.useState(new Date());
    const driver = [{label: 'Mr.Amarabandu'}, {label: 'Mr.Roopasinghe'}, {label: 'Mr.Saman'}, {label: 'Mr.Amal'}];
    const [driverStatus, setDriverStatus] = React.useState(false);
    const handleCheck = (event) => {
        setDriverStatus(event.target.checked);
        console.log(event.target.checked)
    };

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
                    <div className='FormControlLabel'>
                        <FormGroup className='check' style={{display: 'inline-block'}}>
                            <FormControlLabel control={<Checkbox checked={driverStatus} onChange={handleCheck}/>} label="Need a driver."/>
                        </FormGroup>
                        <FontAwesomeIcon icon={faCircleQuestion} className='question'/>
                        <label className='disc'>If you want a driver as well, you have to check this and It will cause
                            you to add an additional charge for your final cost.</label>
                    </div>
                    <div>
                        <div className='vehicle_details'>
                            <div>
                                <label>Vehicle details</label>
                            </div>
                            <div>
                                <label>Vehicle : </label>
                                <label>Type :</label>
                                <label>Fuel Type</label>
                                <label>Passengers</label>
                                <label>Last Mileage</label>
                                <label>dsfsdf</label>
                            </div>
                        </div>
                        {
                            driverStatus && <div className='driver_details'>
                                <div>
                                    <label>Driver details</label>
                                </div>
                                <div>
                                     <Autocomplete
                                    id="transmission-select-demo"
                                    sx={{width: '90%'}}
                                    size='small'
                                    validators={['required']}
                                      /*onInputChange={(event, value) => {
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
                                            className='cmb_driver'
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

                                    <label >Name :</label>
                                    <label >Age  :</label>
                                    <label >Total rides :</label>
                                    <label >Contact :</label>
                                    <label >E-mail</label>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
