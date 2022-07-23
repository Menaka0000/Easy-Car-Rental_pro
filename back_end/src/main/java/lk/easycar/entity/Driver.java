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
public class Driver {
    @Id
    String id;
    String userName;
    String email;
    String firstName;
    String lastName;
    String address;
    String contact;
    String password;
}
