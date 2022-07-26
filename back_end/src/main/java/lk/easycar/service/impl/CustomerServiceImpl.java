package lk.easycar.service.impl;

import lk.easycar.dto.CustomerDTO;
import lk.easycar.entity.Customer;
import lk.easycar.repo.CustomerRepo;
import lk.easycar.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveCustomer(CustomerDTO dto) {
        if (!repo.existsById(dto.getCusId())) {
            repo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("A customer is already exists on this id!");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getCusId())) {
            repo.save(mapper.map(dto, Customer.class));
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public CustomerDTO searchCustomer(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), CustomerDTO.class);
        } else {
            throw new RuntimeException("Customer couldn't find!");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomers() {
        return mapper.map(repo.findAll(), new TypeToken<List<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public boolean isExistByNicAndUserName(String nic , String userName) {
      return   repo.existsCustomerByNicAndUserName(nic, userName);
    }

    public CustomerDTO getLastCustomer(){
        if (repo.getLastCustomer()!=null){
            return mapper.map(repo.getLastCustomer(),CustomerDTO.class);
        }
     return null;
    }
}

