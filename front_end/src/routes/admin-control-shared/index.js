import {Outlet} from 'react-router-dom';
import Header from "../../component/header";

const SharedLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};
export default SharedLayout;