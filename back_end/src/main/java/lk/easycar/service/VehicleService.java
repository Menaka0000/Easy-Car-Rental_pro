package lk.easycar.service;

import lk.easycar.dto.VehicleDTO;
import java.util.List;

public interface VehicleService {
    void SaveVehicle(VehicleDTO dto);
    void deleteVehicle(String id);
    void updateVehicle(VehicleDTO dto);
    VehicleDTO searchVehicle(String id);
    List<VehicleDTO> getAllVehicles();
}
