package lk.easycar.controller;

import lk.easycar.dto.VehicleDTO;
import lk.easycar.service.VehicleService;
import lk.easycar.util.IdGenerator;
import lk.easycar.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    VehicleService vehicleService;
    @Autowired
    IdGenerator idGenerator;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicles() {
        return new ResponseUtil(200,"Ok",vehicleService.getAllVehicles());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO vehicle) throws Exception {
        System.out.println(vehicle);
        if(vehicleService.existsByRegisteredNum(vehicle.getRegisteredNum())){
            throw new Exception("Vehicle Number is already exist.");
        }
        vehicle.setId(idGenerator.getID("vehicle"));
        vehicleService.SaveVehicle(vehicle);
        System.out.println(vehicle);
        return new ResponseUtil(200,"Successfully added!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO vehicle) {
        vehicleService.updateVehicle(vehicle);
        return new ResponseUtil(200,"Vehicle details was updated!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteVehicle(@RequestParam String id) {
        vehicleService.deleteVehicle(id);
        return new ResponseUtil(200,"Vehicle has been deleted!",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicle(@PathVariable String id) {
        return new ResponseUtil(200,"Ok",vehicleService.searchVehicle(id));
    }
    @PutMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateStatus(@PathVariable String id){
        System.out.println("gonna go to update status" );
        String status="onGoing";
        vehicleService.updateStatus(status,id);
        return new ResponseUtil(200,"This reservation has been updated",null);
    }
}
