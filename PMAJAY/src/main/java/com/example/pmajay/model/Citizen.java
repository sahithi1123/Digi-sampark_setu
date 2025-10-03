package com.example.pmajay.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Citizen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String name;
    private String email;
    private String address;
    private String verificationId;
    private String phone;
    private String cstate;
    private String password;

    @OneToMany(mappedBy = "citizen" , cascade = CascadeType.ALL)
    private List<Complaint> complaint;

    @OneToMany(mappedBy = "citizen", cascade = CascadeType.ALL)
    private List<FeedBack> feedBack;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; 
}
