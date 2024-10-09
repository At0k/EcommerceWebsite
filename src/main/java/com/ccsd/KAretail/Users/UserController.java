package com.ccsd.KAretail.Users;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/Users")

public class UserController {
    @Autowired
    private UserServices userService;
    private UserRepository userRepository;
    
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

    //Login-------------------------------------------------
    @GetMapping("/login")
    public ResponseEntity<String> dashboard(HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized. Please log in.");
        }
        int role = (int) session.getAttribute("role");
        return switch (role) {
            case 1 -> ResponseEntity.ok("Welcome Customer");
            case 2 -> ResponseEntity.ok("Welcome Staff");
            default -> ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        };
    }

    //Forgot Password---------------------------------------
    @PostMapping("/forgot-password")
    public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        User user = userRepository.findByEmail(email);
        
        if (user != null) {
            // Allow the user to directly reset the password
            return ResponseEntity.ok("Email verified. You can reset your password.");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found.");
    }

    //Reset Password----------------------------------------
    @PostMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> request){
        String email = request.get("email");
        String newPassword = request.get("newPassword");

        User user = userRepository.findByEmail(email);
        if(user != null){
            user.setPassword(newPassword);
            userRepository.save(user);
            return ResponseEntity.ok("Password updated");

        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Email not found.");
    }

}
