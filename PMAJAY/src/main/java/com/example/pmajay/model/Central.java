package com.example.pmajay.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
public class Central {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String email;
    private String password;

    @OneToMany(mappedBy = "central" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Scheme> schemes;

    @OneToMany(mappedBy = "central" , cascade = CascadeType.ALL)
    @JsonIgnore 
    private List<Loan> loans;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore 
    private User user;
}
