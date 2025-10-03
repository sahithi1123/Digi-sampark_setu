// package com.example.pmajay.services;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.pmajay.model.User;
// import com.example.pmajay.repository.UserRepository;

// import jakarta.servlet.http.HttpSession;

// @Service
// public class UserServices {
//     @Autowired
//     UserRepository ur;

    
//     // @Autowired
//     // private BCryptPasswordEncoder passwordEncoder;

//     // @Autowired
//     // private HttpSession session;

//     // public String loginUser(String email, String password){
//     //     User user = ur.findByEmail(email);
//     //     if(user != null && passwordEncoder.matches(password, user.getPassword())){
//     //         session.setAttribute("loggedInId", user.getId());
//     //         session.setAttribute("loggedInEmail", user.getEmail());
//     //         session.setAttribute("role", user.getRole());
//     //         return user.getRole().toString();
//     //     } 
//     //     return "Invalid credentials";
//     // }

// }
