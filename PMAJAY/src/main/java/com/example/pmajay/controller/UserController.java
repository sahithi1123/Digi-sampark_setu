package com.example.pmajay.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pmajay.model.User;
import com.example.pmajay.repository.UserRepository;
 
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository ur;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User loginRequest) {
    User user = ur.findByEmail(loginRequest.getEmail());
    if (user == null || !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                             .body("Invalid email or password");
    }
    Map<String, Object> response = new HashMap<>();
    response.put("id", user.getId());
    response.put("email", user.getEmail());
    response.put("role", user.getRole());

    return ResponseEntity.ok(response);
}


}
 