package com.example.pmajay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.pmajay.model.Central;
import com.example.pmajay.model.Role;
import com.example.pmajay.model.User;
import com.example.pmajay.repository.CentralRepository;
import com.example.pmajay.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class CentralServices {
    @Autowired
    CentralRepository cr;

    @Autowired
    UserRepository ur;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired  
    HttpSession session;

        public String registerCentral(Central central) {
        String email=central.getEmail();
        Central existCentral = cr.findByEmail(central.getEmail());
        if (existCentral != null) {
            return "Email already exists";
        }
        if (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.(gov\\.in|nic\\.in)$")) {
            return "Only official government emails are allowed.";
        }
        String hashedPassword = passwordEncoder.encode(central.getPassword());
        central.setPassword(hashedPassword);
        User u=new User();
        u.setEmail(central.getEmail());
        u.setPassword(hashedPassword);
        u.setRole(Role.CENTRAL);
        ur.save(u);
        central.setUser(u);
        cr.save(central);
        return "Registered Successfully";
    }
 
    // public String loginCentral(Central central) {
    // Central existCentral=cr.findByEmail(central.getEmail());
    // if(existCentral!=null && existCentral.getPassword().equals(central.getPassword())){
    //     session.setAttribute("logInCId", existCentral.getId());
    //     session.setAttribute("logInCUsername", existCentral.getEmail());
    //     return "Login Successfull";
    // }
    // return "Invalid Id or password";
    // }

}
