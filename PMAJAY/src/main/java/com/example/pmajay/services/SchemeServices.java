package com.example.pmajay.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pmajay.model.Central;
import com.example.pmajay.model.Scheme;
import com.example.pmajay.model.State;
import com.example.pmajay.repository.CentralRepository;
import com.example.pmajay.repository.SchemeRepository;
import com.example.pmajay.repository.StateRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class SchemeServices {

    @Autowired
    SchemeRepository sr;

    @Autowired
    CentralRepository cr;

    @Autowired
    StateRepository stater;

    @Autowired
    HttpSession session;

    public String addScheme(Scheme scheme,State stateid,Central central) {
        Long id=central.getId();
        if (id == null) {
            return "Invalid Central User!";
        }
        scheme.setCentral(central);
        scheme.setState(stateid); 
        sr.save(scheme);
        return "Scheme is added successfully for the state";
    }

}
