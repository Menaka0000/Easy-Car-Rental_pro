import React, {useEffect} from 'react';
import './style.css'
import axios from "../../api/api";

export default function CustomerView() {


    const [allCustomers, setAllCustomers] = React.useState([]);


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            axios.get('customer')
                .then((res) => {
                    console.log(res);
                    setAllCustomers(res.data.data);
                    console.log(allCustomers);
                })
                .catch((err) => {
                    console.log(err)
                })
        })
        /*  const res=  promise;
          if (res.status==200){
              setAllCustomers(res.data.data);
              console.log('reached')
              console.log(allCustomers)
          }*/
    }, [])
    return (
        <div className='cus_container'>
            <label>Registered customers</label>
            <div className='row_con'>
                <div className='cus_header'>
                    <div>
                        <label className='cus_id'>ID</label>
                    </div>
                    <div>
                        <label className='la'>First Name</label>
                        <label className='la'>Last Name</label>
                        <label className='la'>NIC</label>
                        <label className='la'>Contact</label>
                        <label className='la'>E-mail</label>
                    </div>
                </div>
                {allCustomers.map(customer =>
                    <>
                        <div className='cus_row'>
                            <div className='id_con'>
                                <label>{customer.cusId}</label>
                            </div>
                            <div className='rest_con'>
                                <label className='la'>{customer.firstName}</label>
                                <label className='la'>{customer.lastName}</label>
                                <label className='la'>{customer.nic}</label>
                                <label className='la'>{customer.contact}</label>
                                <label className='la'>{customer.email}</label>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}