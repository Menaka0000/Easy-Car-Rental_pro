package lk.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.Entity;
import javax.persistence.Id;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Vehicle {
    @Id
    String id;
    String vehicleType;
    String fuelType;
    String transmission;
    String registeredNum;
    String manufacturer;
    String color;
    int passengers;
    int lastMileage;
    int lastServiceMileage;
    int dailyFreeMileage;
    int monthlyFreeMileage;
    double dailyRental;
    double monthlyRental;
    double extraCostPerKm;
}
