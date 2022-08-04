package lk.easycar.controller;

import lk.easycar.dto.CustomerDTO;
import lk.easycar.service.CustomerService;
import lk.easycar.util.IdGenerator;
import lk.easycar.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @Autowired
    IdGenerator idGenerator;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil(200,"Ok",customerService.getAllCustomers());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customer) throws Exception {
        if(customerService.isExistByNicAndUserName(customer.getNic(),customer.getUserName())){
            throw new Exception("User Name or Nic number is already exist");
        }
        customer.setCusId(idGenerator.getID("customer"));
        System.out.println(customer);
        customerService.saveCustomer(customer);
        return new ResponseUtil(200,"Your account has been created!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customer) {
        customerService.updateCustomer(customer);
        return new ResponseUtil(200,"Your details was updated!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@RequestParam String id) {
        customerService.deleteCustomer(id);
        return new ResponseUtil(200,"Account has been deleted!",null);
    }

   /* @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id) {
        return new ResponseUtil(200,"Ok",customerService.searchCustomer(id));
    }*/
    @GetMapping(path = "/{userName}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchByUserName(@PathVariable String userName){
        System.out.println("reached here");
        System.out.println(userName);
        return new ResponseUtil(200,"SignIn successfully!",customerService.searchByUserName(userName));
    }
}
