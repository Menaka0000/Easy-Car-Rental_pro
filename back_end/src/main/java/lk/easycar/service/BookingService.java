package lk.easycar.service;

import lk.easycar.dto.BookingDTO;
import lk.easycar.dto.CustomerDTO;

import java.util.List;

public interface BookingService {
    void saveBooking(BookingDTO dto);
    void deleteBooking(String id);
    void updateBooking(BookingDTO dto);
    BookingDTO getLastBooking();
    BookingDTO searchBooking(String id);
    List<BookingDTO> getAllBooking();
    Integer updateStatus1(String status,String id);
}
