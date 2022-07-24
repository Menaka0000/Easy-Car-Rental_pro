package lk.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDTO {
    String id;
    String cusId;
    String driverId;
    String vehicleId;
    String leavingDate;
    String leavingTime;
    String returningDate;
    String status;
    double rentalCost;
    double damage;
}