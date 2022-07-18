import React from "react";
import "./style.css"
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <section className="header">
            <img src={logo} alt="" className="logo"/>
            <ul className="navbar">
                <li>Home</li>
                <li>Services</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </section>
    )
}