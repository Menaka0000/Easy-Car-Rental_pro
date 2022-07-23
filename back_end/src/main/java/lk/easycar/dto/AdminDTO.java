package lk.easycar.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class AdminDTO {
    String id;
    String userName;
    String email;
    String firstName;
    String lastName;
    String address;
    String contact;
    String password;
}
