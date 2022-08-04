import React, {useContext} from "react";
import {Box, Grid, TextField} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import './style.css'
import Button from "@mui/material/Button";
import {NavLink, useNavigate} from "react-router-dom";
import userStateContext from "../../context/userStateContext";
import axios from "../../api/api";
import swal from "sweetalert";

export default function SignIn() {
    let navigate = useNavigate();
    const {setState}=useContext(userStateContext);
    const [user,setUser]=React.useState({
        userName:'',
        password:''
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        console.log(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.get('customer/'+user.userName)
            .then((res) => {
                if (res.data.code === 200) {
                    console.log(res.data)
                    console.log(res.data.data.password)
                    if (res.data.data.password==user.password){
                        const status = {
                            loginStatus: "signIn",
                            user:res.data.data,
                            vehicles:{
                            }
                        }
                        setState(status);
                        navigate('/')
                    }
                swal("Successful!", `${res.data.message}`, "success");
                }
            })
            .catch((err) => {
                swal("Unsuccessful!", `${err.response.data.message}`, "error");
            })
    }

    return (

        <section className="main-container">
            <div className="sub-container">
                <label className="label">Sign In</label>
                <div className='div1'></div>
                <div className='div2'>
                    <ValidatorForm
                        // ref='form'
                         onSubmit={handleSubmit}
                         onError={errors => console.log(errors)}
                    >
                        <Box sx={{width: '100%'}}  className='box'>
                            <Grid
                                container
                                spacing={4}
                                item xs={12}
                                direction="column"
                            >
                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="User name" variant="outlined" size="small" name="userName"
                                                   style={{width: '100%'}}
                                                   validators={['required','isString']}
                                         value={user.userName}
                                         onChange={handleChange}
                                    />
                                </Grid>

                                <Grid spacing={2} item xs={12} md={12} className='gridItem'>
                                    <TextValidator id="outlined-basic" label="Password" variant="outlined" size="small" name="password"
                                                   style={{width: '100%'}}
                                                   validators={['required']}
                                        value={user.password}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <label style={{fontSize: '.8rem', padding: '5px', display: 'inline'}}>Don't you have an account?</label>
                                    <NavLink to='/sign-up' style={{fontSize:'.8rem',display:'inline'}}>Start here</NavLink>
                                </Grid>
                                <Grid item xs={12} md={12}><Button type={"submit"} variant="contained" size='small' style={{
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