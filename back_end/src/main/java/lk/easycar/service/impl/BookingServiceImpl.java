package lk.easycar.service.impl;

import lk.easycar.dto.BookingDTO;
import lk.easycar.dto.CustomerDTO;
import lk.easycar.entity.Booking;
import lk.easycar.repo.BookingRepo;
import lk.easycar.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveBooking(BookingDTO dto) {
        if (!repo.existsById(dto.getId())) {
            System.out.println(mapper.map(dto, Booking.class));
            repo.save(mapper.map(dto, Booking.class));
        } else {
            throw new RuntimeException("An another booking is already exists on this id!");
        }
    }

    @Override
    public void deleteBooking(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public void updateBooking(BookingDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Booking.class));
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public BookingDTO getLastBooking() {
        if (repo.getLastBooking()!=null){
            return mapper.map(repo.getLastBooking(), BookingDTO.class);
        }
        return null;
    }

    @Override
    public BookingDTO searchBooking(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), BookingDTO.class);
        } else {
            throw new RuntimeException("This booking couldn't find!");
        }
    }

    @Override
    public List<BookingDTO> getAllBooking() {
        return mapper.map(repo.findAll(), new TypeToken<List<BookingDTO>>() {
        }.getType());    }

    @Override
    public Integer updateStatus1(String status,String id) {
        System.out.println(id);
        System.out.println("reached to update");
        return repo.updateStatus1(status,id);
    }
}
