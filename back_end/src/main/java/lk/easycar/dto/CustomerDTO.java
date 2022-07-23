package lk.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    String cusId ;
    String userName;
    String email;
    String cusFirstName;
    String cusLastName;
    String dob;
    String nic;
    String contact;
    String password;
}