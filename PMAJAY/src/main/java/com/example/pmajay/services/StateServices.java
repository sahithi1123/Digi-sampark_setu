package com.example.pmajay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.pmajay.model.Role;
import com.example.pmajay.model.State;
import com.example.pmajay.model.User;
import com.example.pmajay.repository.StateRepository;
import com.example.pmajay.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class StateServices {
    @Autowired
    StateRepository sr;
  
    @Autowired
    UserRepository ur;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    HttpSession session;

    public String registerState(State state) {
        String email=state.getEmail();
        State existState = sr.findByEmail(state.getEmail());
        User existUser=ur.findByEmail(state.getEmail());
        if (existUser != null || existState !=null) {
            return "Email already exists";
        }
        if (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.(gov\\.in|nic\\.in)$")) {
            return "Only official government emails are allowed.";
        }
        String hashedPassword = passwordEncoder.encode(state.getPassword());
        state.setPassword(hashedPassword);
        User u=new User();
        u.setEmail(state.getEmail());
        u.setPassword(hashedPassword);
        u.setRole(Role.STATE);
        ur.save(u);
        state.setUser(u);
        sr.save(state);
        return "Registered Successfully";
    }

    public String loginState(State state) {
        State existstate = sr.findByEmail(state.getEmail());
        if (existstate != null && passwordEncoder.matches(state.getPassword(),existstate.getPassword())) {
            session.setAttribute("loggedInState", existstate.getId());
            session.setAttribute("loggedInSEmail", existstate.getEmail());
            return "login successful";
        }
        return "Invalid email or password";
    }


}
