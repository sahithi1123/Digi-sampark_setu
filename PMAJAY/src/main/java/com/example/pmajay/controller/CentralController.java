package com.example.pmajay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pmajay.model.Central;
import com.example.pmajay.repository.CentralRepository;
import com.example.pmajay.services.CentralServices;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/central")
public class CentralController {
    @Autowired
    CentralServices as;

    @Autowired
    CentralRepository cr;

    @Autowired
    HttpSession session;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Central central){
        String resp = as.registerCentral(central);
        if (resp.equals("Registered Successfully")) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Central Registered Successfully");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
    }
    // @PostMapping("/login")
    // public ResponseEntity<?> login(@RequestBody Central central){
    // Central existCentral=cr.findByEmail(central.getEmail());
    // if(existCentral!=null && existCentral.getPassword().equals(central.getPassword())){
    //      return ResponseEntity.ok(central);
    // }
    //     return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    // }
}
