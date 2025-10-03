package com.example.pmajay.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pmajay.model.State;
import com.example.pmajay.services.StateServices;

@RestController
@RequestMapping("/api/state")
public class StateController {

    @Autowired
    StateServices ss;

    @PostMapping("/register")
    public ResponseEntity<?> r1(@RequestBody State state) {
        String resp = ss.registerState(state);
        if (resp.equals("Registered Successfully")) {
            return ResponseEntity.status(HttpStatus.CREATED).body(resp);
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(resp);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody State state){
        String res=ss.loginState(state);
        if(res.equals("Login Successfull")){
            return ResponseEntity.ok(res);
        }
        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }
}
