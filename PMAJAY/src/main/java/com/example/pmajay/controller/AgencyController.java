package com.example.pmajay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pmajay.model.Agency;
import com.example.pmajay.model.State;
import com.example.pmajay.repository.AgencyRepository;
import com.example.pmajay.repository.StateRepository;
import com.example.pmajay.services.AgencyServices;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/agency")
public class AgencyController {
    @Autowired
    AgencyServices as;
    
    @Autowired
    StateRepository sr;

    @Autowired
    AgencyRepository ar;

    @Autowired
    HttpSession session;

    @PostMapping("/register/{stateE}")
    public ResponseEntity<?> r1(@RequestBody Agency agency,@PathVariable String stateE) {
        State s=sr.findByEmail(stateE);
        String resp = as.registerAgency(agency,s);
        if (resp.equals("Registered Successfully")) {
            return ResponseEntity.status(HttpStatus.CREATED).body("user Registered Successfully");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Agency agency){
        String res=as.loginAgency(agency);
        if(res.equals("Login Successfull")){
            return ResponseEntity.ok(res);
        }
        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
    }
    @GetMapping("/profile")
    public ResponseEntity<?> profile(){
        Long id=(Long) session.getAttribute("loggedInId");
        String email=(String) session.getAttribute("loggedInEmail");
        if (id == null || email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }
        Agency admin=ar.findByIdAndEmail(id,email);
        if(admin==null){
           return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Invalid user");
        }
        else{
            return ResponseEntity.ok(admin);
        }
    }

}
