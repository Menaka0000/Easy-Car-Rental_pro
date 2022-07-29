package lk.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Booking {
    @Id
    String id;
    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "customerID",referencedColumnName = "cusId",nullable = false)
    Customer customer;
    @ManyToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "driverID",referencedColumnName = "id",nullable = false)
    Driver driver;
    @OneToOne(cascade = {CascadeType.REFRESH,CascadeType.DETACH})
    @JoinColumn(name = "vehicleID",referencedColumnName = "id",nullable = false)
    Vehicle vehicle;
    LocalDate leavingDate;
    String leavingTime;
    LocalDate returningDate;
    String status;
    int totalRide;
    double rentalCost;
    double damage;
}
