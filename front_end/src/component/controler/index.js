import React from "react";
import "./style.css"
import {MdDoubleArrow} from "react-icons/md";
import ControllerButton from "../controller-button";
import {NavLink} from "react-router-dom";


export default function Controller() {
    return (
        <section className="controller">
            <div>
                <p className="heading">CONTROL PANEL</p>
                <div className="car-controls">
                    <p>Car controls</p>
                    <NavLink to='/add-vehicle'><ControllerButton name={"Add new"}/></NavLink>                 <ControllerButton name={"Edit details"}/>
                    <ControllerButton name={"All Cars"}/>
                </div>
                <div className="customer-controls">
                    <p>Customer controls</p>
                    <ControllerButton name={"All requests"}/>
                    <NavLink to='/admin-controls/all-customers'><ControllerButton name={"All customers"}/></NavLink>
                </div>
                <div className="financial-controls">
                    <p>Financial controls</p>
                    <ControllerButton name={"Payments"}/>
                    <ControllerButton name={"Daily summary"}/>
                    <ControllerButton name={"Ongoing"}/>
                </div>
            </div>
            <div>
                <MdDoubleArrow className="arrow"/>
            </div>
        </section>
    )

}