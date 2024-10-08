package com.ccsd.KAretail.Staff;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffServices {

    @Autowired
    private StaffRepository StaffRepository;

    public List<Staff> getAllStaff() {
        return StaffRepository.findAll();
    }

    public Optional<Staff> getStaffById(String id){
        return StaffRepository.findById(id);
    }

    public Staff addStaff(Staff Staff){
        return StaffRepository.save(Staff);
    }

    public Staff updateStaff(String id, Staff StaffDetails) {
        Optional<Staff> StaffOpt = StaffRepository.findById(id);
        if (StaffOpt.isPresent()) {

            Staff Staff = StaffOpt.get();
            Staff.setUsername(StaffDetails.getUsername());
            Staff.setEmail(StaffDetails.getEmail());
            Staff.setPassword(StaffDetails.getPassword());
            return StaffRepository.save(Staff);
        }
        return null;
    }
    public void deleteStaff(String id) {
        StaffRepository.deleteById(id);
    }
    
}
