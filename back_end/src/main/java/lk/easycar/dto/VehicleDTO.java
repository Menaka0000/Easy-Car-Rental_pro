package lk.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class VehicleDTO {
    String id;
    String vehicleType;
    String fuelType;
    String transmission;
    String registeredNum;
    String manufacturer;
    String color;
    int passengers;
    int lastMileage;
    int dailyFreeMileage;
    int monthlyFreeMileage;
    double dailyRental;
    double monthlyRental;
    double extraCostPerKm;
}
