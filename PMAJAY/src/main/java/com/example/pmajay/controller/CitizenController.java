package com.example.pmajay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pmajay.model.Citizen;
import com.example.pmajay.repository.CitizenRepository;
import com.example.pmajay.services.CitizenServices;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/citizen")
public class CitizenController {
    
    @Autowired
    CitizenServices cs;

    @Autowired
    CitizenRepository cr;

    @Autowired
    HttpSession session;

    @PostMapping("/register")
    public ResponseEntity<?> r1(@RequestBody Citizen citizens) {
        String resp = cs.registerCitizen(citizens);
        if (resp.equals("Registered Successfully")) {
            return ResponseEntity.status(HttpStatus.CREATED).body("user Registered Successfully");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");

    }

    @PostMapping("/login")
    public ResponseEntity<?> l1(@RequestBody Citizen citizens) {
        String res = cs.userLogin(citizens);
        if (res.equals("login successful")) {
            return ResponseEntity.ok(res);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

}
