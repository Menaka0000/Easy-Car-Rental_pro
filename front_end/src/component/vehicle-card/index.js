import React, {useEffect} from 'react'
import './style.css'
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

export default function VehicleCard(props) {

    const [img, setImg] = React.useState('');

    try {
        useEffect(() => {
            async function loadImage() {
                try {
                    let ob =await props.file;
                    let images = ob.file;
                    await setImg(images[0]);
                }catch (e){}
            }
            loadImage();
        });
    } catch (e) {
        console.log("can't read")
    }
    console.log(img)

    return (
        <div id="product">
            <div className="card">
                <img src={img} alt=""/>
                <div className="content1">
                    <label className='vehicle_name'>{props.car.manufacturer}</label>
                    <label className='la-rest'>Daily Rental : RS. {props.car.dailyRental}</label>
                    <label className='la-rest'>Monthly Rental : RS. {props.car.monthlyRental}</label>
                    <label className='la-rest'>Free Mileage (1Day) : {props.car.dailyFreeMileage} Km</label>
                    <label className='la-rest'>Free Mileage (1Mon) : {props.car.monthlyFreeMileage} Km</label>
                    <NavLink to='/checkout'><Button className='card_button' variant="contained" id={props.car.id}
                            onClick={e => {
                                console.log(e.target.id);
                            }}
                    >RESERVE</Button></NavLink>
                </div>
            </div>
        </div>
    )
}