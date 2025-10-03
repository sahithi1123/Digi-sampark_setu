package com.example.pmajay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.pmajay.model.Citizen;
import com.example.pmajay.model.Role;
import com.example.pmajay.model.User;
import com.example.pmajay.repository.CitizenRepository;
import com.example.pmajay.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class CitizenServices {
    @Autowired
    CitizenRepository cr;

    @Autowired
    UserRepository ur;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    HttpSession session;

    public String registerCitizen(Citizen citizen) {
       Citizen existCitizen = cr.findByEmail(citizen.getEmail());
       User existUser=ur.findByEmail(citizen.getEmail());
        if (existCitizen != null || existUser !=null) {
            return "Email already exists";
        }
        String hashedPassword = passwordEncoder.encode(citizen.getPassword());
        citizen.setPassword(hashedPassword);
        User u=new User();
        u.setEmail(citizen.getEmail());
        u.setPassword(hashedPassword);
        u.setRole(Role.CITIZEN);
        ur.save(u);
        citizen.setUser(u);
        cr.save(citizen);
        return "Registered Successfully";
    }

    public String userLogin(Citizen citizens) {
        Citizen existcitizen = cr.findByEmail(citizens.getEmail());
        if (existcitizen != null && passwordEncoder.matches(citizens.getPassword(),existcitizen.getPassword())) {
            session.setAttribute("loggedInCitizen", existcitizen.getId());
            session.setAttribute("loggedInEmail", existcitizen.getEmail());
            return "login successful";
        }
        return "Invalid email or password";
    }

}
