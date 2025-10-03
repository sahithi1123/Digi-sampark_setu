package com.example.pmajay.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class Agency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String agencyName;
    private String agencyType;
    private String contactPerson;
    private String designation;
    private String email;
    private String phone;
    private String address;
    private String password;
 
    @ManyToOne
    @JoinColumn(name="state_id",nullable=false)
    private State state;

    @OneToMany(mappedBy = "agency" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Complaint> complaint;

    @OneToMany(mappedBy = "agency" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ReportSubmission> report;

    @ManyToMany(mappedBy = "agencies")
    private List<SchemeAllocation> allocations;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
