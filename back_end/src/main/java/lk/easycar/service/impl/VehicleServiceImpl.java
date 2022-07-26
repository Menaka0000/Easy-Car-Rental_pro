package lk.easycar.service.impl;

import lk.easycar.dto.VehicleDTO;
import lk.easycar.entity.Vehicle;
import lk.easycar.repo.VehicleRepo;
import lk.easycar.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void SaveVehicle(VehicleDTO dto) {
        if (!repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("A vehicle is already exists on this id!");
        }

    }

    @Override
    public void deleteVehicle(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Id is invalid,Please check it again!");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Vehicle.class));
        } else {
            throw new RuntimeException("Id is invalid,Please check it again!");
        }
    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), VehicleDTO.class);
        } else {
            throw new RuntimeException("No Customer For " + id + " ..!");
        }
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        return mapper.map(repo.findAll(), new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public boolean existsByRegisteredNum(String num) {
        return repo.existsByRegisteredNum(num);
    }
}
