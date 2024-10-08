package com.ccsd.KAretail.Users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/Users")

public class UserController {
    @Autowired
    private UserServices userService;
    
    @GetMapping
    public List<User> getAllUser() {
        return userService.getAllUser();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/login")
    public ResponseEntity<String> dashboard(HttpSession session){
        if (session.getAttribute("userId") == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized. Please log in.");
        }
        int role = (int) session.getAttribute("role");
        if (role == 1) {
            return ResponseEntity.ok("Welcome Admin");
        } else if (role == 3) {
            return ResponseEntity.ok("Welcome Customer");
        } else if (role == 2) {
            return ResponseEntity.ok("Welcome Staff");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        }
        
        // String role = (String) session.getAttribute("role");
        // if("Admin".equals(role)){
        //     return ResponseEntity.ok("Welcome Admin");
        // } else if("Customer".equals(role)){
        //     return ResponseEntity.ok("Welcome Customer");
        // }else if ("Staff".equals(role)) {
        //     return ResponseEntity.ok("Welcome Staff");
        // } else {
        //     return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        // }
    }
    // @PostMapping("/register")
    // public ResponseEntity<Customer> register(@RequestBody Customer customer) {
    //     try {
    //         Customer newCustomer = customerService.register(customer);
    //         return ResponseEntity.ok(newCustomer);
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    //     }
    // }
}
