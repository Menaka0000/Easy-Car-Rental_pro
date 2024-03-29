package lk.easycar.util;

import lk.easycar.entity.Booking;
import lk.easycar.entity.Customer;
import lk.easycar.entity.Vehicle;
import lk.easycar.repo.AdminRepo;
import lk.easycar.repo.BookingRepo;
import lk.easycar.repo.CustomerRepo;
import lk.easycar.repo.VehicleRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class IdGenerator {
    @Autowired
    private CustomerRepo cusRepo;
/*    @Autowired
    private AdminRepo adminRepo;*/
    @Autowired
    private VehicleRepo vehicleRepo;
    @Autowired
    private BookingRepo bookingRepo;

    public String getID(String requestFor){
        int tempId=0;
        String prefix="";
        switch (requestFor){
            case "customer":{
                Customer lastCustomer = cusRepo.getLastCustomer();
                if (lastCustomer==null){return  "C-001";}
                tempId = Integer.parseInt(lastCustomer.getCusId().split("-")[1]);
                prefix="C";
                break;
            }
            case "vehicle":{
                Vehicle lastVehicle = vehicleRepo.getLastVehicle();
                if (lastVehicle==null){return  "V-001";}
                tempId = Integer.parseInt(lastVehicle.getId().split("-")[1]);
                prefix="V";
                break;
            }
            case "booking":{
                Booking lastBooking = bookingRepo.getLastBooking();
                if (lastBooking==null){return  "B-001";}
                tempId = Integer.parseInt(lastBooking.getId().split("-")[1]);
                prefix="B";
                break;
            }
        }
        tempId=tempId+1;
        if(tempId<=9){return prefix+"-00"+tempId;}
        else if(tempId<=99){ return prefix+"-0"+tempId;}
        else {return prefix+"-"+tempId;}
    }


}
