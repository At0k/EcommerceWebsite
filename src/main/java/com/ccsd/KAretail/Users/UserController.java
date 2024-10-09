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

    @PostMapping("/register")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        // Check if the email already exists
        if (userRepository.findByEmail(user.getEmail()) != null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists");
        }
        
        // Save the new user (password in plain text)
        userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLoginRequest loginRequest, HttpSession session) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Find the user by email
        User user = userRepository.findByEmail(email);
        if (userRepository.findByEmail(user.getEmail()) != null) {
            // Validate password (without encryption)
            if (password.equals(user.getPassword())) {
                // Store user info in session
                session.setAttribute("userId", user.getId());
                session.setAttribute("role", user.getRole());

                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();  // Clear session data
        return ResponseEntity.ok("Logout successful");
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


    @GetMapping("/dashboard")

    @GetMapping("/login")
    public ResponseEntity<String> dashboard(HttpSession session) {
        if (session.getAttribute("userId") == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized. Please log in.");
        }

        int role = (int) session.getAttribute("role");
        if (role == 1) {
            return ResponseEntity.ok("Welcome Admin");
        } else if (role == 2) {
            return ResponseEntity.ok("Welcome Staff");
        } else if (role == 3) {
            return ResponseEntity.ok("Welcome Customer");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        return switch (role) {
            case 1 -> ResponseEntity.ok("Welcome Customer");
            case 2 -> ResponseEntity.ok("Welcome Staff");
            default -> ResponseEntity.status(HttpStatus.FORBIDDEN).body("Access denied");
        };
    }
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        try {
            User newUser = userService.registerUser(user);
            return ResponseEntity.ok(newUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
