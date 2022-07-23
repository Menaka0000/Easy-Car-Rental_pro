import React from "react";
import {Box, Grid, TextField} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import './style.css'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {NavLink} from "react-router-dom";


export default function SignIn() {
    return (

        <section className="main-container">
            <div className="sub-container">
                <label className="label">Sign In</label>
                <div className='div1'></div>
                <div className='div2'>
                    <ValidatorForm
                        // ref='form'
                        /* onSubmit={handleSubmit}
                         onError={errors => console.log(errors)}*/
                    >
                        <Box sx={{width: '100%'}}  className='box'>
                            <Grid
                                container
                                spacing={4}
                                item xs={12}
                                direction="column"
                                /*alignItems="center"
                                justifyContent="center"
                                rowSpacing={2}
                                className="grid"*/
                            >
                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="User name" variant="outlined" size="small" name="userName"
                                                   style={{width: '100%'}}
                                                   validators={['required','isString']}
                                        /* value={formData.userName}
                                         onChange={handleChange}*/
                                    />
                                </Grid>

                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small" name="password"
                                                   style={{width: '100%'}}
                                                   validators={['required', 'isEmail']}
                                        /*value={formData.email}
                                        onChange={handleChange}*/
                                    />
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <label style={{fontSize: '.8rem', padding: '5px', display: 'inline'}}>Don't you have an account?</label>
                                    <NavLink to='/sign-up' style={{fontSize:'.8rem',display:'inline'}}>Start here</NavLink>
                                </Grid>
                                <Grid item xs={12} md={12}><Button variant="contained" size='small' style={{
                                    position: 'absolute',
                                    right: '0',
                                    width: '100px'
                                }}>Sign In</Button> </Grid>
                            </Grid>
                        </Box>
                    </ValidatorForm>
                </div>
                <div className='div3'></div>
            </div>

        </section>
    )
}