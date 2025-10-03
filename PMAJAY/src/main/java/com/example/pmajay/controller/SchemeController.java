package com.example.pmajay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.PageRequest;
// import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.pmajay.model.Central;
import com.example.pmajay.model.Scheme;
import com.example.pmajay.model.State;
import com.example.pmajay.repository.CentralRepository;
import com.example.pmajay.repository.SchemeRepository;
import com.example.pmajay.repository.StateRepository;
import com.example.pmajay.repository.UserRepository;
import com.example.pmajay.services.SchemeServices;

@RestController
@RequestMapping("/api/scheme")
@CrossOrigin(origins = "http://localhost:5173",allowCredentials = "true")
public class SchemeController {
    @Autowired
    SchemeRepository sr;

    @Autowired
    StateRepository stater;

    @Autowired
    UserRepository ur;

    @Autowired
    CentralRepository cr;

    @Autowired 
    SchemeServices ss;

    @PostMapping("/add/{encodedState}/{centralE}")
    public ResponseEntity<?> add(@PathVariable String encodedState,@PathVariable String centralE , @RequestBody Scheme scheme){
        State stateObj = stater.findByName(encodedState);
        Central central=cr.findByEmail(centralE);
        if (stateObj == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("State not found");
        }

        String resp = ss.addScheme(scheme, stateObj,central);
        if (resp.equals("Scheme is added successfully for the state")) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Scheme is added successfully for "+encodedState);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resp);
    }
   @GetMapping
    public List<Scheme> getSchemesByState(@RequestParam String state) {
        State stateEntity = stater.findByNameIgnoreCase(state);
        if (stateEntity == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "State not found");
        }
        return sr.findAllByState(stateEntity);
    }
}
