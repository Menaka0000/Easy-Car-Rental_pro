package lk.easycar.controller;

import lk.easycar.dto.AdminDTO;
import lk.easycar.dto.CustomerDTO;
import lk.easycar.service.AdminService;
import lk.easycar.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllAdmin() {
        return new ResponseUtil(200,"Ok", adminService.getAllAdmin());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO admin) {
        adminService.saveAdmin(admin);
        return new ResponseUtil(200,"Your account has been created!",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateAdmin(@RequestBody AdminDTO admin) {
        adminService.updateAdmin(admin);
        return new ResponseUtil(200,"Your details was updated!",null);
    }

    @DeleteMapping(params = {"id"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteAdmin(@RequestParam String id) {
        adminService.deleteAdmin(id);
        return new ResponseUtil(200,"Account has been deleted!",null);
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchAdmin(@PathVariable String id) {
        return new ResponseUtil(200,"Ok", adminService.searchAdmin(id));
    }
}
