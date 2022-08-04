import React from "react";
import './style.css'
import {Autocomplete, Box, Grid, InputAdornment, TextField} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import swal from "sweetalert";
import axios from "../../api/api";
import fileUploadService from "../../services/fileUploadService";
import {useContext} from "react";
import ImgLibraryContext from "../../context/imgLibraryContext";

export default function VehicleForm() {
    const {imgLibrary}=useContext(ImgLibraryContext);
    const {addImgSet}=useContext(ImgLibraryContext);
    console.log(imgLibrary.length)
    const types = [{label: 'General'}, {label: 'Premium'}, {label: 'Luxury'}];
    const fuelType = [{label: 'Petrol (92 oct)'}, {label: 'Petrol (95 oct)'}, {label: 'Diesel'}, {label: 'Super Diesel'}];
    const transmissionType = [{label: 'Auto'}, {label: 'Manual'}, {label: 'Both (paddle shift)'}];

    const [imgFile, setImgFile] = React.useState([]);

    const [formData, setFormData] = React.useState({
        id: "",
        vehicleType: "",
        fuelType: "",
        transmission: "",
        registeredNum: "",
        manufacturer: "",
        color: "",
        status:"available",
        passengers: "",
        lastMileage: "",
        dailyFreeMileage: "",
        monthlyFreeMileage: "",
        dailyRental: "",
        monthlyRental: "",
        extraCostPerKm: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('vehicle', formData)
            .then((res) => {
                if (res.data.code === 200) {
                    swal("Successful!", `${res.data.message}`, "success");
                    addImgSet(imgFile);
                    console.log(imgLibrary)
                }
            })
            .catch((err) => {
                swal("Unsuccessful!", `${err.response.data.message}`, "error");

            })
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        console.log(value);
    }

    const handleSelectedImg = async (event) => {
        var data = new FormData();
        let file = event.target.files[0];
        console.log(event.target.files[0])
        let fileName = event.target.files[0].name;
        data.append("myFile", file, fileName);
        console.log(file);
        console.log(fileName);
        const uploadRes = await fileUploadService.upload(file);
        if (uploadRes.status === 200) {
            console.log(uploadRes);
            const requestRes = await fileUploadService.getAllImages();
            let url = requestRes.data[requestRes.data.length - 1];
            const newUrl = `http://localhost:8080/back_end_war/${url}`
            setImgFile(prevState => [...prevState, newUrl])
        }
    }



    return (
        <section className='section_1'>
            <div className='lbl1_con'>
                <label className='lblNewVehicle'>New Vehicle</label>
            </div>
            <div className='form_con'>
                <div>
                    <ValidatorForm
                        // ref='form'
                        onSubmit={handleSubmit}
                        onError={errors => console.log(errors)}
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
                                        sx={{width: '100%'}}
                                        size='small'
                                        options={types}
                                        autoHighlight
                                        validators={['required']}
                                        onInputChange={(event, value) => {
                                            const temp = formData;
                                            temp.vehicleType = value;
                                            setFormData(temp);
                                            console.log(formData.vehicleType)
                                        }}
                                        getOptionLabel={(option) => option.label}
                                        renderOption={(props, option) => (
                                            <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
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
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <Autocomplete
                                        id="fuel-select-demo"
                                        sx={{width: '100%'}}
                                        size='small'
                                        validators={['required']}
                                        onInputChange={(event, value) => {
                                            const temp = formData;
                                            temp.fuelType = value;
                                            setFormData(temp);
                                            console.log(formData.fuelType);
                                        }}
                                        options={fuelType}
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
                                        sx={{width: '100%'}}
                                        size='small'
                                        validators={['required']}
                                        onInputChange={(event, value) => {
                                            const temp = formData;
                                            temp.transmission = value;
                                            setFormData(temp);
                                            console.log(formData.transmission)
                                        }}
                                        options={transmissionType}
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
                                    <TextValidator id="outlined-basic" label="Registered number" variant="outlined"
                                                   size="small" name="registeredNum"
                                                   style={{width: '100%'}}
                                                   validators={['required', 'isString']}
                                                   value={formData.registeredNum}
                                                   onChange={handleChange}
                                    />
                                </Grid>
                                <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="Manufacturer" variant="outlined"
                                                   size="small" name="manufacturer"
                                                   style={{width: '100%'}}
                                                   validators={['required']}
                                                   value={formData.manufacturer}
                                                   onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator id="outlined-basic" label="Color" variant="outlined" size="small"
                                                   name="color"
                                                   style={{width: '100%'}}
                                                   validators={['required', 'isString']}
                                                   value={formData.color}
                                                   onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator id="outlined-basic" label="Passengers" variant="outlined"
                                                   size="small" name="passengers"
                                                   style={{width: '100%'}}
                                                   validators={['required', 'isPositive']}
                                                   value={formData.passengers}
                                                   onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='lastMileage'
                                        value={formData.lastMileage}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Last mileage"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='dailyFreeMileage'
                                        value={formData.dailyFreeMileage}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Daily free mileage"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='monthlyFreeMileage'
                                        value={formData.monthlyFreeMileage}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Monthly free mileage"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">Km</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='dailyRental'
                                        value={formData.dailyRental}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Daily rental"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='monthlyRental'
                                        value={formData.monthlyRental}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Monthly rental"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextValidator
                                        name='extraCostPerKm'
                                        value={formData.extraCostPerKm}
                                        onChange={handleChange}
                                        validators={['required', 'isPositive']}
                                        size='small'
                                        label="Extra cost per Km"
                                        id="outlined-start-adornment"
                                        sx={{width: '100%'}}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}></Grid>
                                <Grid item xs={12} md={12}>
                                    <label style={{fontSize: '.8rem', padding: '5px', display: 'block'}}>Upload four
                                        different images that belong to this vehicle
                                    </label>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant="contained" type='submit' size='small' style={{
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
                <label>Uploaded images will be displayed below. >></label>
                <div>
                    <div className='img_1'>
                        <img src={imgFile[0]} alt="front_view"/>
                        <IconButton className='camera' color="primary" key={0} aria-label="upload picture"
                                    component="label">
                            <input hidden accept="image/*" onChange={handleSelectedImg} name='img_01'type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                    </div>
                    <div className='img_2'>
                        <img src={imgFile[1]} alt="side_view" className='img_2'/>
                        <IconButton color="primary" key={1} aria-label="upload picture"
                                    component="label">
                            <input hidden accept="image/*" onChange={handleSelectedImg} name='img_02' type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                    </div>
                    <div className='img_3'>
                        <img src={imgFile[2]} alt="interior" className='img_3'/>
                        <IconButton color="primary" key={2} aria-label="upload picture"
                                    component="label">
                            <input hidden accept="image/*" onChange={handleSelectedImg} name='img_02'  type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                    </div>
                    <div className='img_4'>
                        <img src={imgFile[3]} alt="back view" className='img_4'/>
                        <IconButton color="primary" key={3} aria-label="upload picture"
                                    component="label">
                            <input hidden accept="image/*" onChange={handleSelectedImg} name='img_04'  type="file"/>
                            <PhotoCamera/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </section>
    )
}