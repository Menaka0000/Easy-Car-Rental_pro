import React, {useEffect} from "react";
import Slider from "../../component/slider";
import './style.css'
import VehicleCard from "../../component/vehicle-card";
import {useContext} from "react";
import ImgLibraryContext from "../../context/imgLibraryContext";
import UserStateContext from "../../context/userStateContext";
import VehicleService from "../../services/VehicleService";
import fileUploadService from "../../services/fileUploadService";

export default function Home() {
    console.log('render once')
    const [Vehicles, setVehicle] = React.useState([]);
    const {imgLibrary} = useContext(ImgLibraryContext);
    const {addImgSet} = useContext(ImgLibraryContext);
    const {userState} = useContext(UserStateContext);
    const {setUserState} = useContext(UserStateContext);
    let baseUrl = 'http://localhost:8080/back_end_war/';

    useEffect(() => {
        console.log("i fire once man")

        async function fetchVehicles() {
            const res01 = await VehicleService.fetchVehicles();
            setVehicle(res01.data.data)
            if (res01.data.data.length !== imgLibrary.length) {
                const res = await fileUploadService.getAllImages();
                console.log('res from api for omages')
                console.log(res.data)
                const times = res01.data.data.length - imgLibrary.length;
                console.log(times)
                let x = 0;
                for (let j = 0; j < times; j++) {
                    let imageFile = [];
                    for (let j = 0; j < 4; j++) {
                        imageFile[j] = baseUrl + res.data[x++];
                        console.log('img file')
                        console.log(imageFile)
                    }
                    await addImgSet(imageFile);
                }

            }
        }
        fetchVehicles();
        console.log('final list')
        console.log(imgLibrary);
    }, []);

    let i = 0;

    return (
        <>
            <Slider/>
            <div className='con'>
                {
                    Vehicles.map(car => {
                        console.log('from render')
                        console.log(imgLibrary)
                        let file = imgLibrary[i]
                        i++;
                        console.log(file)
                        return (
                            <VehicleCard car={car} file={file}/>
                        )
                    })}
            </div>
        </>
    )
}