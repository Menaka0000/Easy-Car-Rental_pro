import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import SharedLayout from "./routes/main-shared-layout";
import Service from "./pages/service";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import Controller from "./component/controler";
import SignUp from "./component/sign-up";
import SignIn from "./component/sign-in";
import VehicleForm from "./component/vehicle-form";
import CustomerView from "./component/view-customer";
import VehicleView from "./component/view-vehicle";
import VehicleCard from "./component/vehicle-card";
import {ImgLibraryProvider} from "./context/imgLibraryContext";
import {UserStateProvider} from "./context/userStateContext";
import CheckOut from "./component/check-out";
import Requests from "./component/requests";

function App() {
    return (
        <ImgLibraryProvider>
            <UserStateProvider>
                <BrowserRouter>
                    <Controller/>
                    <Routes>
                        <Route path='/' element={<SharedLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route path='service' element={<Service/>}/>
                            <Route path='about' element={<AboutUs/>}/>
                            <Route path='contact' element={<Contact/>}/>
                            <Route path='add-vehicle' element={<VehicleForm/>}/>
                            <Route path='checkout' element={<CheckOut/>}/>

                        </Route>
                    </Routes>
                    <Routes>
                        <Route path='/sign-up' element={<SignUp/>}/>
                        <Route path='/sign-in' element={<SignIn/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/admin-controls' element={<SharedLayout/>}>
                            <Route index element={<Home/>}/>
                            <Route path='all-customers' element={<CustomerView/>}/>
                            <Route path='all-vehicles' element={<VehicleView/>}/>
                            <Route path='all-requests' element={<Requests/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </UserStateProvider>
        </ImgLibraryProvider>
    )
}

export default App;
