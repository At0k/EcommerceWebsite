package com.ccsd.KAretail.Users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServices {
     
    @Autowired
    private UserRepository userRepository;
    private User user;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepository.findById(id);
    }

    public User addUser(User user){
        return userRepository.save(user);
    }

    public User updateUser(String id, User userDetails) {
        Optional<User> userOpt = userRepository.findById(id);
        if (userOpt.isPresent()) {

            User user = userOpt.get();
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setFullname(userDetails.getFullname());
            user.setPhoneNo(userDetails.getPhoneNo());
            user.setRole(userDetails.getRole());
            return userRepository.save(user);
        }
        return null;
    }
    
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }


    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    //  public Customer register(Customer customer) {
    //      if(customerRepository.findById(customer.getEmail()) != null) {
    //          throw new RuntimeException("Email already exists");
    //      }
    //      customer.setPassword(customer.getPassword());
    //      return customerRepository.save(customer);

    // public User register(User user) {
    //     if(userRepository.findById(user.getEmail()) != null) {
    //         throw new RuntimeException("Email already exists");
    //     }
    //     user.setEmail(user.getEmail());
    //     user.setPassword(user.getPassword());
    //     return userRepository.save(user);

    //  }
}
