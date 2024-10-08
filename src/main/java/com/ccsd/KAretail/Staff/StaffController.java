package com.ccsd.KAretail.Staff;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ccsd.KAretail.Staff.Staff;
import com.ccsd.KAretail.Staff.StaffServices;

@RestController
@RequestMapping("/api/staff")
public class StaffController {
    @Autowired
    private StaffServices StaffService;

    @GetMapping
    public List<Staff> getAllStaff() {
        return StaffService.getAllStaff();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable String id) {
        return StaffService.getStaffById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Staff addStaff(@RequestBody Staff Staff) {
        return StaffService.addStaff(Staff);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable String id, @RequestBody Staff StaffDetails) {
        Staff updatedStaff = StaffService.updateStaff(id, StaffDetails);
        if (updatedStaff != null) {
            return ResponseEntity.ok(updatedStaff);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStaff(@PathVariable String id) {
        StaffService.deleteStaff(id);
        return ResponseEntity.noContent().build();
    }
}