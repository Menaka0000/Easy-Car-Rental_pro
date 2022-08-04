import React, {useEffect, useReducer} from 'react';
import './style.css'
import axios from "../../api/api";
import Button from "@mui/material/Button";
import swal from "sweetalert";
export default function Requests(){

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const [allRequests, setAllRequests] = React.useState([]);
    useEffect(() => {
        axios.get('booking')
            .then((res) => {
                console.log(res);
                setAllRequests(res.data.data);
                console.log(allRequests);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const updateStatus = async (id) => {
        axios.put('booking/'+id)
            .then((res) => {
                swal("Successful!", `${res.data.message}`, "success");

                for (const re of allRequests) {
                    if (re.id==id){
                        re.status="accepted"
                        forceUpdate();
                    }
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }
    return(
        <div className='requ_container'>
            <label>Requests for reservations</label>
            <div className='row_con1'>
                <div className='requ_header'>
                    <div>
                        <label className='cus_id'>ID</label>
                    </div>
                    <div>
                        <label className='lab'>Customer Id</label>
                        <label className='lab'>Vehicle Id</label>
                        <label className='lab'>Driver Id</label>
                        <label className='lab'>Departure Date</label>
                        <label className='lab'>Leaving Time</label>
                        <label className='lab'>Returning Date</label>
                        <label className='lab'>Plan</label>
                        <label className='lab'>Status</label>
                        <label className='lab'>Action</label>
                        {/*<label className='lab'></label>*/}
                    </div>
                </div>
                {allRequests.map(request =>
                    <>
                        <div className='requ_row'>
                            <div className='id_con'>
                                <label>{request.id}</label>
                            </div>
                            <div className='rest1_con'>
                                <label className='la-r'>{request.customer.cusId}</label>
                                <label className='la-r'>{request.vehicle.id}</label>
                                <label className='la-r'>{request.driver.id}</label>
                                <label className='la-r'>{request.leavingDate}</label>
                                <label className='la-r'>{request.leavingTime}</label>
                                <label className='la-r'>{request.returningDate}</label>
                                <label className='la-r'>{request.plan}</label>
                                <label className='la-r'>{request.status}</label>
                                {request.status=='pending' ? <div className='la-r'><Button id={request.id} variant="contained" onClick={(e)=>{
                                    updateStatus(e.target.id);
                                }}  size='small'>Accept</Button></div> : <div className='la-r'><label>Done</label></div>}
                                {/*<label className='la-r'></label>*/}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}