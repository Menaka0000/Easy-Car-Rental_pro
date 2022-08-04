package lk.easycar.dto;

import lk.easycar.entity.Customer;
import lk.easycar.entity.Driver;
import lk.easycar.entity.Vehicle;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDTO {
    String id;
    Customer customer;
    Driver driver;
    Vehicle vehicle;
    String plan;
    LocalDate leavingDate;
    String leavingTime;
    LocalDate returningDate;
    String status;
    int totalRide;
    double rentalCost;
    double damage;
}