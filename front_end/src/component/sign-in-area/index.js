import React, {useEffect} from "react";
import "./style.css"
import {NavLink} from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function SignInButton(props){
    const[isDisplay,setDisplay]=React.useState(false);
    useEffect(()=>{
        const timeout1=setTimeout(()=>{setDisplay(true)},1000)
        const timeOut2 = setTimeout(()=>{setDisplay(false)},6000)
        return function (){clearTimeout(timeOut2);clearTimeout(timeout1)} ;
    },[])
    return(
        <div className="signIn">
            <NavLink to='/sign-in' >
                <FaUser className="fa-user"/>
                <p className="sign__in__text">
                Hello, {props.name}
            </p></NavLink>
            <div className="display__banner" style={{
            display: isDisplay ? 'block' : 'none'
            }}>
            <NavLink to='/sign-in'><button type="button" className="banner__button">Sign In</button></NavLink>
                <label className='sign__in__text text__edit1'>New customer?</label>
                <NavLink to='/sign-up' className='sign__in__text text__edit2'>start here</NavLink>
            </div>
        </div>

    )
}

