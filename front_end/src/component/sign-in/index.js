import React, {useEffect} from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function SignIn(props){
    const[isDisplay,setDisplay]=React.useState(true);
    useEffect(()=>{
        const timeOut = setTimeout(()=>{setDisplay(false)},5000)
        return ()=> clearTimeout(timeOut);
    },[])
    return(

        <div className="signIn">
            <NavLink to='/sign-up' >
                <FaUser className="fa-user"/>
                <p className="sign__in__text">
                Hello, {props.name}
            </p></NavLink>
            <div className="display__banner" style={{
            display: isDisplay ? 'block' : 'none'
            }}>
            <button type="button" className="banner__button">Sign In</button>
                <label className='sign__in__text text__edit1'>New customer?</label>
                <NavLink to='/sign-up' className='sign__in__text text__edit2'>start here</NavLink>

            </div>
        </div>

    )
}

