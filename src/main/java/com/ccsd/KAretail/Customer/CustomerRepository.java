package com.ccsd.KAretail.Customer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface CustomerRepository extends MongoRepository<Customer, String> {
    
}
