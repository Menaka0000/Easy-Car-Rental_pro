import React from "react";
import "./style.css"
import {MdDoubleArrow} from "react-icons/md";
import ControllerButton from "../controller-button";
import {NavLink} from "react-router-dom";


export default function Controller() {
    return (
        <div className='fixed_con'>
            <div>
                <section className="controller">
                    <div>
                        <p className="heading">CONTROL PANEL</p>
                        <div className="car-controls">
                            <p>Car controls</p>
                            <NavLink to='/add-vehicle'><ControllerButton name={"Add new"}/></NavLink>
                            <ControllerButton name={"Edit details"}/>
                            <NavLink to='/admin-controls/all-vehicles'><ControllerButton name={"All Cars"}/></NavLink>
                        </div>
                        <div className="customer-controls">
                            <p>Customer controls</p>
                            <NavLink to='/admin-controls/all-requests'>
                                <ControllerButton name={"All requests"}/>
                            </NavLink>
                            <NavLink to='/admin-controls/all-customers'><ControllerButton
                                name={"All customers"}/></NavLink>
                        </div>
                        <div className="financial-controls">
                            <p>Financial controls</p>
                            <NavLink to='/admin-controls/payments'> <ControllerButton name={"Payments"}/></NavLink>
                            <ControllerButton name={"Daily summary"}/>
                            <ControllerButton name={"Ongoing"}/>
                        </div>
                    </div>
                    <div>
                        <MdDoubleArrow className="arrow"/>
                    </div>
                </section>
            </div>
        </div>
    )

}