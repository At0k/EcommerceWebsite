package com.ccsd.KAretail.Billing;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/Billing")
public class BillingController {
    @Autowired
    private BillingServices billingService;

    @GetMapping
    public List<Billing> getAllBilling() {
        return billingService.getAllBilling();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Billing> getBillingById(@PathVariable String id) {
        return billingService.getBillingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Billing addBilling(@RequestBody Billing billing) {
        return billingService.addBilling(billing);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Billing> updateBilling(@PathVariable String id, @RequestBody Billing billingDetails) {
        Billing updatedBilling = billingService.updateBilling(id, billingDetails);
        if (updatedBilling != null) {
            return ResponseEntity.ok(updatedBilling);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBilling(@PathVariable String id) {
        billingService.deleteBilling(id);
        return ResponseEntity.noContent().build();
    }
}
