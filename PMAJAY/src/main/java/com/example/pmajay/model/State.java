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
public class State {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;

    @OneToMany(mappedBy="state" , cascade = CascadeType.ALL)
    @JsonIgnore 
    private List<Agency> agencies;

    @OneToMany(mappedBy = "state" , cascade = CascadeType.ALL)
    @JsonIgnore 
    private List<Complaint> complaints;

    @OneToMany(mappedBy = "state" , cascade = CascadeType.ALL)
    @JsonIgnore 
    private List<ReportSubmission> reports;

    @OneToMany(mappedBy = "state")
    @JsonIgnore 
    private List<SchemeAllocation> allocations;

    @OneToMany(mappedBy = "state" , cascade = CascadeType.ALL)
    @JsonIgnore 
    private List<Loan> loans;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
