import React from "react";
import './style.css'
import logo from '../../assets/logo.png'
import {Box, Grid} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function SignUp() {
    const [formData, setFormData] = React.useState({
        id: "",
        userName: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        dob: "",
        nic: "",
        contact: "",
        password1: "",
        password2: "",
        imgFile: null
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name] : value});
        console.log(value);
    }

    return (
        <section className="main-container">
            <div className="sub-container1">
                <img src={logo} className="logo" alt=""/>
                <label className="label1">Create your new account</label>
                <ValidatorForm className="pt-2"
                               // ref='form'
                    /* onSubmit={handleSubmit}
                     onError={errors => console.log(errors)}*/
                >
                    <Box sx={{width: '96%'}} style={{marginLeft: '10px'}}>
                        <Grid
                            container
                            spacing={4}
                            item
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            rowSpacing={2}
                            className="grid"
                        >
                            <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                <TextValidator id="outlined-basic" label="User name" variant="outlined" size="small"
                                           style={{width: '100%'}}
                                    validators={['required','isString']}
                                           value={formData.userName}
                                           onChange={handleChange}
                                />
                            </Grid>
                            <Grid spacing={2} item xs={6} md={6} className='gridItem'></Grid>
                            <Grid spacing={2} item xs={6} md={6} className='gridItem'>
                                <TextValidator id="outlined-basic" label="E-mail" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'isEmail']}
                                               value={formData.email}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid spacing={2} item xs={6} md={6} className='gridItem'></Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="First name" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'isString']}
                                               value={formData.firstName}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="Last name" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'isString']}
                                               value={formData.lastName}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="Address" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'isString']}
                                               value={formData.address}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="DOB   (eg:dd/mm/yyyy)" variant="outlined"
                                               size="small" style={{width: '100%'}}
                                               validators={['required', 'matchRegexp:^(?:(?:31(\\/|-|\\.)(?:0?[13578]|1[02]))\\1|(?:(?:29|30)(\\/|-|\\.)(?:0?[13-9]|1[0-2])\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/|-|\\.)0?2\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\\d|2[0-8])(\\/|-|\\.)(?:(?:0?[1-9])|(?:1[0-2]))\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$']}
                                               value={formData.dob}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="NIC" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'matchRegexp:^([0-9]{9}[x|X|v|V]|[0-9]{12})$']}
                                               value={formData.nic}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="Contact" variant="outlined" size="small"
                                               style={{width: '100%'}}
                                               validators={['required', 'matchRegexp:^(?:7|0|(?:\\+94))[0-9]{9,10}$']}
                                               value={formData.contact}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small"
                                               style={{width: '100%'}} type='password'
                                               validators={['required', 'matchRegexp:^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$']}
                                               value={formData.password1}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextValidator id="outlined-basic" label="Confirm password" variant="outlined"
                                               size="small" style={{width: '100%'}} type='password'
                                               validators={['required', 'matchRegexp:^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$']}
                                               value={formData.password2}
                                               onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <label style={{fontSize: '.8rem', padding: '5px', display: 'block'}}>Upload an image of
                                    your drivers license. </label>
                                <Button variant="text" component="label" size='small'>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file"/>
                                </Button>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file"/>
                                    <PhotoCamera/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} md={12}><Button variant="contained" size='small' style={{
                                position: 'absolute',
                                right: '0',
                                width: '100px'
                            }}>Create</Button> </Grid>
                        </Grid>
                    </Box>
                </ValidatorForm>
            </div>

        </section>
    )
}