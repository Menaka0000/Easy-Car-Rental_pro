package lk.easycar.controller;

import lk.easycar.dto.BookingDTO;
import lk.easycar.service.BookingService;
import lk.easycar.util.IdGenerator;
import lk.easycar.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {
    @Autowired
    BookingService bookingService;
    @Autowired
    IdGenerator idGenerator;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBooking() {
        return new ResponseUtil(200,"Ok", bookingService.getAllBooking());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveBooking(@RequestBody BookingDTO booking) {
        booking.setId(idGenerator.getID("booking"));
        System.out.println("requesting to make a reservation");
        System.out.println(booking);
        bookingService.saveBooking(booking);
        return new ResponseUtil(200,"Your booking has been submitted to review!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateBooking(@RequestBody BookingDTO booking) {
        bookingService.updateBooking(booking);
        return new ResponseUtil(200,"Booking details was updated!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteBooking(@RequestParam String id) {
        bookingService.deleteBooking(id);
        return new ResponseUtil(200,"Requested booking has been deleted!",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchBooking(@PathVariable String id) {
        return new ResponseUtil(200,"Ok", bookingService.searchBooking(id));
    }

    @PutMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateStatus(@PathVariable String id){
        System.out.println("gonna go to update status" );
        String status="accepted";
        bookingService.updateStatus1(status,id);
        return new ResponseUtil(200,"This reservation has been updated",null);
    }
}
