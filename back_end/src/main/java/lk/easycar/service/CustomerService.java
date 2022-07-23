package lk.easycar.service;

import lk.easycar.dto.CustomerDTO;
import java.util.List;

public interface CustomerService {
        void saveCustomer(CustomerDTO dto);
        void deleteCustomer(String id);
        void updateCustomer(CustomerDTO dto);
        CustomerDTO searchCustomer(String id);
        List<CustomerDTO> getAllCustomers();
}
