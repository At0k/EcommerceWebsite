package com.ccsd.KAretail.Users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserServices {
     
    public static final ResponseEntity<String> user = null;
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepository.findById(id);
    }

    public User getUserByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public User addUser(User user){
        if (userRepository.findByUsername(user.getUsername()) != null){
            throw new RuntimeException("Username already taken");
        }
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

    public User findUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        return user;
    }

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        return user;
    }
}
