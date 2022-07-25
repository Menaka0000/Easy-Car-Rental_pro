package lk.easycar.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Customer {
    @Id
    String cusId ;
    String userName;
    String email;
    String FirstName;
    String LastName;
    String dob;
    String nic;
    String contact;
    String password;
}
