package lk.easycar.service.impl;

import lk.easycar.dto.AdminDTO;
import lk.easycar.entity.Admin;
import lk.easycar.repo.AdminRepo;
import lk.easycar.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepo repo;
    @Autowired
    private ModelMapper mapper;

    @Override
    public void saveAdmin(AdminDTO dto) {
        if (!repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Admin.class));
        } else {
            throw new RuntimeException("An admin is already exists on this id!");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("Please check the admin ID.. No Such Customer..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getId())) {
            repo.save(mapper.map(dto, Admin.class));
        } else {
            throw new RuntimeException("Id is invalid, Please check it again!");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (repo.existsById(id)) {
            return mapper.map(repo.findById(id).get(), AdminDTO.class);
        } else {
            throw new RuntimeException("Admin couldn't find!");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        return mapper.map(repo.findAll(), new TypeToken<List<AdminDTO>>() {
        }.getType());
    }
}
