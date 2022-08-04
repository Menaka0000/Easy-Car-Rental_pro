package lk.easycar.repo;

import lk.easycar.entity.Customer;
import lk.easycar.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    @Query(value = "SELECT * FROM `vehicle` ORDER BY id DESC LIMIT 1", nativeQuery = true)
    Vehicle getLastVehicle();
    boolean existsByRegisteredNum(String registeredNum);
    @Modifying
    @Query(value = "UPDATE vehicle SET status = ?1 WHERE id = ?2", nativeQuery = true)
    Integer updateStatus(String state,String id);
}
