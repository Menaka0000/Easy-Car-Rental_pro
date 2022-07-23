import React from "react";
import './style.css'
import {Autocomplete, Box, Grid, InputAdornment, TextField} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

export default function VehicleForm(){
    const types=[{label:'General'},{label: 'Premium'},{label: 'Luxury'}];
    const fuelType=[{label:'Petrol (92 oct)'},{label: 'Petrol (95 oct)'},{label: 'Diesel'},{label: 'Super Diesel'}];
    const transmissionType=[{label:'Auto'},{label: 'Manual'},{label: 'Both (paddle shift)'}];

    const [formData,setFormData]=React.useState({
        id:"",
        vehicleType:"",
        fuelType:"",
        transmission:"",
        registeredNum:"",
        manufacturer:"",
        color:"",
        passengers:"",
        lastMileage:"",
        dailyFreeMileage:"",
        monthlyFreeMileage:"",
        dailyRental:"",
        monthlyRental:"",
        extraCostPerKm:"",
        img_1:"",
        img_2:"",
        img_3:"",
        img_4:"",
    });

    return(
        <section className='section_1'>
            <div className='lbl1_con'>
                <label className='lblNewVehicle'>New Vehicle</label>
            </div>
            <div className='form_con'>
                <div>
                    <ValidatorForm
                        // ref='form'
                        /* onSubmit={handleSubmit}
                         onError={errors => console.log(errors)}*/
                    >
                        <Box sx={{width: '100%'}}>
                            <Grid
                                container
                                spacing={4}
                                item
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                                rowSpacing={3}
                                className="grid"
                            >

                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <Autocomplete
                                        id="type-select-demo"
                                        sx={{ width: '100%' }}
                                        size='small'
                                        options={types}
                                        autoHighlight
                                        getOptionLabel={(option) => option.label}
                                        renderOption={(props, option) => (
                                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                {option.label}
                                            </Box>
                                        )}
                                        renderInput={(params) => (
                                            <TextField
                                                name='vehicleType'
                                                {...params}
                                                label="Vehicle type"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    readOnly: true,
                                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                                }}
                                            />
                                        )}
                                        onChange={(event, value) => {
                                            let oj=value;
                                            console.log(value)
                                            console.log(typeof oj.label)
                                            console.log(oj.label);
                                        }}
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <Autocomplete
                                        id="fuel-select-demo"
                                        sx={{ width: '100%' }}
                                        size='small'
                                        options={fuelType}
                                        autoHighlight
                                        getOptionLabel={(option) => option.label}
                                        renderOption={(props, option) => (
                                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                {option.label}
                                            </Box>
                                        )}
                                        renderInput={(params) => (
                                            <TextField
                                                name='fuelType'
                                                {...params}
                                                label="fuel type"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    readOnly: true,
                                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <Autocomplete
                                        id="transmission-select-demo"
                                        sx={{ width: '100%' }}
                                        size='small'
                                        options={transmissionType}
                                        autoHighlight
                                        getOptionLabel={(option) => option.label}
                                        renderOption={(props, option) => (
                                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                {option.label}
                                            </Box>
                                        )}
                                        renderInput={(params) => (
                                            <TextField
                                                name='transmission'
                                                {...params}
                                                label="Transmission type"
                                                inputProps={{
                                                    ...params.inputProps,
                                                    readOnly: true,
                                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                                }}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={6} md={6}></Grid>

                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="Registered number" variant="outlined" size="small" name="registeredNum"
                                                   style={{width: '100%'}}
                                        // validators={['required','isString']}
                                        /*  value={formData.userName}
                                          onChange={handleChange}*/
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="Manufacturer" variant="outlined" size="small" name="manufacturer"
                                                   style={{width: '100%'}}
                                        /*     validators={['required', 'isEmail']}
                                             value={formData.email}
                                             onChange={handleChange}*/
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator id="outlined-basic" label="Color" variant="outlined" size="small" name="color"
                                                   style={{width: '100%'}}
                                                  /* validators={['required', 'isString']}
                                                   value={formData.firstName}
                                                   onChange={handleChange}*/
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator id="outlined-basic" label="Passengers" variant="outlined" size="small" name="passengers"
                                                   style={{width: '100%'}}
                                                  /* validators={['required', 'isString']}
                                                   value={formData.lastName}
                                                   onChange={handleChange}*/
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='lastMileage'
                                        size='small'
                                        label="Last mileage"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='dailyFreeMileage'
                                        size='small'
                                        label="Daily free mileage"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='monthlyFreeMileage'
                                        size='small'
                                        label="Monthly free mileage"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='dailyRental'
                                        size='small'
                                        label="Daily rental"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='monthlyRental'
                                        size='small'
                                        label="Monthly rental"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        name='extraCostPerKm'
                                        size='small'
                                        label="Extra cost per Km"
                                        id="outlined-start-adornment"
                                        sx={{ width: '100%' }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={12} md={12}>
                                    <label style={{fontSize: '.8rem', padding: '5px', display: 'block'}}>Upload four different images that belong to this vehicle
                                         </label>
                                    <Button variant="text" component="label" size='small'>
                                        Upload
                                        <input hidden accept="image/*" multiple type="file"/>
                                    </Button>
                                    <IconButton color="primary" aria-label="upload picture" component="label">
                                        <input hidden accept="image/*" type="file"/>
                                        <PhotoCamera/>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant="contained" size='small' style={{
                                        position: 'absolute',
                                        right: '0',
                                        width: '100px'
                                    }}>Add</Button> </Grid>
                            </Grid>
                        </Box>
                    </ValidatorForm>
                </div>
            </div>
            <div className='img_con'>
                <label >Uploaded images will be displayed below. >></label>
                <div>
                    <div className='img_1'>img1</div>
                    <div className='img_2'>img2</div>
                    <div className='img_3'>img3</div>
                    <div className='img_4'>img4</div>
                </div>
            </div>
        </section>
    )
}