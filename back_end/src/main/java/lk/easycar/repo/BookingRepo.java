package lk.easycar.repo;

import lk.easycar.entity.Booking;
import lk.easycar.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BookingRepo extends JpaRepository<Booking,String> {
    @Query(value = "SELECT * FROM `booking` ORDER BY id DESC LIMIT 1", nativeQuery = true)
    Booking getLastBooking();
    @Modifying
    @Query(value = "UPDATE booking SET status = ?1 WHERE id = ?2", nativeQuery = true)
    Integer updateStatus1(String state,String id);
}
