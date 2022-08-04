package lk.easycar.service;

import lk.easycar.dto.CustomerDTO;
import java.util.List;

public interface CustomerService {
        void saveCustomer(CustomerDTO dto);
        void deleteCustomer(String id);
        void updateCustomer(CustomerDTO dto);
        CustomerDTO searchCustomer(String id);
        CustomerDTO searchByUserName(String userName);
        CustomerDTO getLastCustomer();
        List<CustomerDTO> getAllCustomers();
        boolean isExistByNicAndUserName(String nic , String userName);
}
