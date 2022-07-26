import React, {useEffect} from 'react';
import './style.css'
import axios from "../../api/api";

export default function VehicleView() {

    const [allVehicles, setAllVehicle] = React.useState([]);

    useEffect(() => {
        axios.get('vehicle')
            .then((res) => {
                console.log(res);
                setAllVehicle(res.data.data);
                console.log(allVehicles);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <div className='vehi_container'>
            <label>Registered Cars</label>
            <div className='row_con'>
                <div className='cus_header'>
                    <div>
                        <label className='cus_id'>ID</label>
                    </div>
                    <div>
                        <label className='la'>Registered Num</label>
                        <label className='la'>Type</label>
                        <label className='la'>Manufacturer</label>
                        <label className='la'>Transmission</label>
                        <label className='la'>Fuel type</label>
                        <label className='la'>Passengers</label>
                        <label className='la'>Daily Rental</label>
                        <label className='la'>Monthly Rental</label>
                        <label className='la'>Daily Free</label>
                        <label className='la'>Monthly Free</label>
                    </div>
                </div>
                {allVehicles.map(vehicle =>
                    <>
                        <div className='cus_row'>
                            <div className='id_con'>
                                <label>{vehicle.id}</label>
                            </div>
                            <div className='rest_con'>
                                <label className='la-v'>{vehicle.registeredNum}</label>
                                <label className='la-v'>{vehicle.vehicleType}</label>
                                <label className='la-v'>{vehicle.manufacturer}</label>
                                <label className='la-v'>{vehicle.transmission}</label>
                                <label className='la-v'>{vehicle.fuelType}</label>
                                <label className='la-v'>{vehicle.passengers}</label>
                                <label className='la-v'>{vehicle.dailyRental}</label>
                                <label className='la-v'>{vehicle.monthlyRental}</label>
                                <label className='la-v'>{vehicle.dailyFreeMileage}</label>
                                <label className='la-v'>{vehicle.monthlyFreeMileage}</label>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}