import React, {useContext, useState} from 'react'
import './style.css'
import {Autocomplete, Box, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import {MobileTimePicker} from "@mui/x-date-pickers";
import { ValidatorForm} from "react-material-ui-form-validator";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import Button from "@mui/material/Button";
import {useLocation} from "react-router-dom";
import userStateContext from "../../context/userStateContext";
import axios from "../../api/api";
import swal from "sweetalert";

export default function CheckOut() {
    const location = useLocation();
    const selectedVehicle = location.state.selectedVehicle;

    const {userState} = useContext(userStateContext);
    const [value1, setValue1] = React.useState(new Date());
    const [value2, setValue2] = React.useState(new Date());
    const [value3, setValue3] = React.useState(new Date());
    const [reservation, setReservation] = useState({
        id: '',
        customer: userState.user.user,
        vehicle: selectedVehicle,
        driver: {id:'D-001',address:'Galle',contact:'0762340944',email:'sdfsdfsd',firstName:'sumane',lastName:'gunathilaka',password:'sumane1234',userName:'sumane'},
        plan: '',
        leavingDate: null,
        leavingTime: null,
        returningDate: null,
        status: 'pending',
        totalRide: '',
        rentalCost: '',
        damage: ''
    });
    const [rentalPackage, setRentalPackage] = React.useState({
            rental: {
                daily: false,
                monthly: false
            }
        }
    );

    const driver = [{label: 'Mr.Amarabandu'}, {label: 'Mr.Roopasinghe'}, {label: 'Mr.Saman'}, {label: 'Mr.Amal'}];
    const [driverStatus, setDriverStatus] = React.useState(false);

    const handleCheck = (event) => {
        setDriverStatus(event.target.checked);
    };

    const updateVehiStatus = async (id) => {

    }

    const handleSubmit = async ()=>{
        let temp = reservation;
        temp.leavingDate = value1;
        temp.leavingTime = value2;
        temp.returningDate = value3;
        setReservation(temp);
        console.log(temp);
        console.log(reservation)
        axios.post('booking', reservation)
            .then((res) => {
                if (res.data.code==200){
                    swal("Successful!", `${res.data.message}`, "success");
                    axios.put('vehicle/'+selectedVehicle.id)
                        .then((res) => {
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }

            })
            .catch((err) => {
                console.log(err)

            })
    }

    const toggle = (event) => {
        console.log(event.target.id)
        if (event.target.id == 0) {
            setRentalPackage(({
                rental: {
                    daily: true,
                    monthly: false
                }
            }))
            let temp = reservation;
            temp.plan = 'daily';
            setReservation(temp);
        } else {
            setRentalPackage(({
                rental: {
                    daily: false,
                    monthly: true
                }
            }))
            let temp = reservation;
            temp.plan = 'monthly';
            setReservation(temp);
        }
    }

    const setLostDamage = (type) => {
        if (type === 'Premium') {
            return '15000'
        } else if (type === 'Luxury') {
            return '20000'
        } else {
            return '10000'
        }
    }

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
                                value={value1}
                                onChange={(newValue) => {
                                    setValue1(newValue);
                                }}
                                renderInput={(params) => <TextField size='small' className='date' {...params} />}
                            />
                            <MobileTimePicker
                                label="Departure Time"
                                value={value2}
                                onChange={(newValue) => {
                                    setValue2(newValue);
                                }}
                                renderInput={(params) => <TextField size='small'
                                                                    className='leaving_time' {...params} />}
                            />
                            <MobileDatePicker
                                className="date"
                                label="Returning Date"
                                inputFormat='yyyy/MM/dd'
                                value={value3}
                                onChange={(newValue) => {
                                    setValue3(newValue);
                                }}
                                renderInput={(params) => <TextField size='small'
                                                                    className=' return_date' {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='FormControlLabel'>
                        <FormGroup className='check' style={{display: 'inline-block'}}>
                            <FormControlLabel control={<Checkbox checked={driverStatus} onChange={handleCheck}/>}
                                              label="Need a driver."/>
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
                                <label>Vehicle : {selectedVehicle.manufacturer} </label>
                                <label>Type : {selectedVehicle.vehicleType}</label>
                                <label>Transmission : {selectedVehicle.transmission}</label>
                                <label>Fuel Type : {selectedVehicle.fuelType}</label>
                                <label>Passengers : {selectedVehicle.passengers}</label>
                                <label>Last Mileage : {selectedVehicle.lastMileage} Km</label>
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
                                    <label>Name :</label>
                                    <label>Age :</label>
                                    <label>Total rides :</label>
                                    <label>Contact :</label>
                                    <label>E-mail</label>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div className='right_main_container'>
                            <label className='lbl_des'>Select your plan that would you like to proceed with.</label>
                            <div className='plan_select'>
                                <div className={'sel_button ' + (rentalPackage.rental.daily ? 'toggle' : '')} id={0}
                                     onClick={(event) => toggle(event)}>
                                    <div><label>DAILY PLAN</label></div>
                                    <p className='mileage'>Free {selectedVehicle.dailyFreeMileage} Km </p>
                                    <p className='for'>For</p>
                                    <p className='cost'>Rs. {selectedVehicle.dailyRental}</p>
                                    <p className='extra'>Each and every extra Km that you ride will be charged Rs.500
                                        per-Km</p>
                                </div>
                                <div className={'sel_button ' + (rentalPackage.rental.monthly ? 'toggle' : '')} id={1}
                                     onClick={(event) => toggle(event)}>
                                    <div>
                                        <label>MONTHLY PLAN</label>
                                    </div>
                                    <p className='mileage'>Free {selectedVehicle.monthlyFreeMileage} Km</p>
                                    <p className='for'>For</p>
                                    <p className='cost'>Rs. {selectedVehicle.monthlyRental}</p>
                                    <p className='extra'>Each and every extra Km that you ride will be charged Rs.500
                                        per-Km</p>
                                </div>
                            </div>
                            <div className='cus_details'>
                                <p className='lost_damage_waiver'>Lost Damage Waiver :
                                    Rs. {setLostDamage(selectedVehicle.vehicleType)}<br/>
                                    <p>(This is an optional product that waives our financial responsibility for any
                                        loss or damage incurred to the rental vehicle, provided you have not violated
                                        the Rental Agreement’s Terms and Conditions.)</p></p>
                                <p>Your detail</p>
                                <p className='details'>
                                    <label>Name : {userState.user.user.firstName}</label>
                                    <label>NIC : {userState.user.user.nic}</label>
                                    <label>E-mail : {userState.user.user.email}</label>
                                    <label>Contact : {userState.user.user.contact}</label>
                                </p>
                                    <Button className='btn_reserve' type={"submit"} variant="contained" onClick={handleSubmit}>Reserve</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
