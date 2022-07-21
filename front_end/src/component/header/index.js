import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css"
import SignIn from "../sign-in";
import logo from "../../assets/logo.png"

export default function Header() {

    return (
        <section className="header">
            <img src={logo} alt="" className="logo"/>
            <nav className="navbar">
                <NavLink to='/' className={({isActive})=>(isActive ? 'linkActive' : 'link')}>Home</NavLink>
                <NavLink to='/service' className={({isActive})=>(isActive ? 'linkActive' : 'link')}>Services</NavLink>
                <NavLink to='/about' className={({isActive})=>(isActive ? 'linkActive' : 'link')}>About Us</NavLink>
                <NavLink to='/contact' className={({isActive})=>(isActive ? 'linkActive' : 'link')}>Contact</NavLink>
            </nav>
            <SignIn name={"Sign-In"}/>
        </section>
    )
}