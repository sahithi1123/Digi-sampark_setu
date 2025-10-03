package com.example.pmajay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.pmajay.model.Agency;
import com.example.pmajay.model.Role;
import com.example.pmajay.model.State;
import com.example.pmajay.model.User;
import com.example.pmajay.repository.AgencyRepository;
import com.example.pmajay.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class AgencyServices {
    @Autowired
    AgencyRepository ar;

    @Autowired
    UserRepository ur;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    HttpSession session;

    public String registerAgency(Agency agency,State s) {
        if (s == null) {
            return "State not logged in";
        }
        String email = agency.getEmail();
        Agency existAgency = ar.findByEmail(email);
        User existUser=ur.findByEmail(email);
        if (existAgency != null|| existUser!=null) {
            return "Email already exists"; 
        }
        if (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.(gov\\.in|nic\\.in)$")) {
            return "Only official government emails are allowed.";
        }
        String hashedPassword = passwordEncoder.encode(agency.getPassword());
        agency.setPassword(hashedPassword);
        User u=new User();
        u.setEmail(agency.getEmail());
        u.setPassword(hashedPassword);
        u.setRole(Role.AGENCY);
        ur.save(u);
        agency.setUser(u);
        agency.setState(s);
        ar.save(agency);
        return "Registered Successfully";
    }

    public String loginAgency(Agency agency) {
        Agency existAgency=ar.findByEmail(agency.getEmail());
        if (existAgency != null && passwordEncoder.matches(agency.getPassword(), existAgency.getPassword())) {
            return "Login Successfull";
        }

        return "Invalid Id or password";
    }

}
