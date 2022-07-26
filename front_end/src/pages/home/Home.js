import React, {useEffect} from "react";
import Slider from "../../component/slider";
import './style.css'
import axios from "../../api/api";
import VehicleCard from "../../component/vehicle-card";

export default function Home() {
    const [Vehicles, setVehicle] = React.useState([]);


    useEffect(() => {
            axios.get('vehicle')
                .then((res) => {
                    console.log(res);
                    setVehicle(res.data.data);
                    console.log(Vehicles);
                })
                .catch((err) => {
                    console.log(err)
                })
    }, []);

    return (
        <>
            <Slider/>
            <div className='con'>
                {Vehicles.map(car=>
                    <VehicleCard car={car}/>
                )}
            </div>
        </>


    )
}