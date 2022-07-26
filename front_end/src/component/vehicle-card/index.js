import React from 'react'
import './style.css'
import Button from "@mui/material/Button";

export default function VehicleCard(props) {
    return (
        <div id="product">
            <div className="card" /*key={product._id}*/>
                <img /*src={product.src}*/ alt=""/>
                <div className="content1">
                    <label className='vehicle_name' >{props.car.manufacturer}</label>
                    <label className='la-rest'>Daily Rental : RS. {props.car.dailyRental}</label>
                    <label className='la-rest'>Monthly Rental : RS. {props.car.monthlyRental}</label>
                    <label className='la-rest'>Free Mileage (1Day) : {props.car.dailyFreeMileage} Km</label>
                    <label className='la-rest'>Free Mileage (1Mon) : {props.car.monthlyFreeMileage} Km</label>
                    <Button className='card_button' variant="contained" id={props.car.id}
                    onClick={e=>{
                        console.log(e.target.id);
                    }}
                    >RESERVE</Button>
                </div>
            </div>
        </div>
    )
}