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


function App() {
    return (
        <BrowserRouter>
            <Controller/>
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='service' element={<Service/>}/>
                    <Route path='about' element={<AboutUs/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route path='sign-up' element={<SignUp/>}/>
            </Routes>
        </BrowserRouter>
)

}

export default App;
