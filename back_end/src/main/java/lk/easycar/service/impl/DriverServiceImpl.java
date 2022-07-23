package lk.easycar.service.impl;

import lk.easycar.dto.DriverDTO;
import lk.easycar.entity.Driver;
import lk.easycar.repo.DriverRepo;
import lk.easycar.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    private DriverRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Driver.class));
        } else {
            throw new RuntimeException("A driver is already exists on this id!");
        }

    }

    @Override
    public void deleteDriver(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Driver.class));
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), DriverDTO.class);
        } else {
            throw new RuntimeException("Driver couldn't find!");
        }
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        return mapper.map(repo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }
}
