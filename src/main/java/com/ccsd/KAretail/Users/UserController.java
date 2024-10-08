package com.ccsd.KAretail.Users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
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
