package com.ccsd.KAretail.Billing;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BillingServices {
    @Autowired
    private BillingRepository billingRepository;

    public List<Billing> getAllBilling() {
        return billingRepository.findAll();
    }

    public Optional<Billing> getBillingById(String id){
        return billingRepository.findById(id);
    }

    public Billing addBilling(Billing billing){
        return billingRepository.save(billing);
    }

    public Billing updateBilling(String id, Billing billingDetails) {
        Optional<Billing> billingOpt = billingRepository.findById(id);
        if (billingOpt.isPresent()) {

            Billing billing = billingOpt.get();
            billing.setName(billingDetails.getName());
            billing.setAddress(billingDetails.getAddress());
            billing.setCity(billingDetails.getCity());
            billing.setPostcode(billingDetails.getPostcode());
            billing.setCountry(billingDetails.getCountry());
            return billingRepository.save(billing);
        }
        return null;
    }
    public void deleteBilling(String id) {
        billingRepository.deleteById(id);
    }
}
