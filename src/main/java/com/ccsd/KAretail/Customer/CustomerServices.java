package com.ccsd.KAretail.Customer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccsd.KAretail.Customer.Customer;
import com.ccsd.KAretail.Customer.CustomerRepository;

@Service
public class CustomerServices {
     
    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();
    }

    public Optional<Customer> getCustomerById(String id){
        return customerRepository.findById(id);
    }

    public Customer addCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(String id, Customer customerDetails) {
        Optional<Customer> customerOpt = customerRepository.findById(id);
        if (customerOpt.isPresent()) {

            Customer customer = customerOpt.get();
            customer.setUsername(customerDetails.getUsername());
            customer.setPassword(customerDetails.getPassword());
            customer.setFullname(customerDetails.getFullname());
            customer.setPhoneNo(customer.getPhoneNo());
            return customerRepository.save(customer);
        }
        return null;
    }
    public void deleteCustomer(String id) {
        customerRepository.deleteById(id);
    }
    // public Customer register(Customer customer) {
    //     if(customerRepository.findById(customer.getEmail()) != null) {
    //         throw new RuntimeException("Email already exists");
    //     }
    //     customer.setPassword(customer.getPassword());
    //     return customerRepository.save(customer);
    // }
}
