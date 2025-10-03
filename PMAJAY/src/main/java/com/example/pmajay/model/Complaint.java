package com.example.pmajay.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String subject;
    private String description;
    private String status; 

    @ManyToOne
    @JoinColumn(name="citizen_id",nullable = false)
    private Citizen citizen;

    @ManyToOne
    @JoinColumn(name="state_id",nullable = false)
    private State state;

    @ManyToOne
    @JoinColumn(name="agency_id",nullable = false)
    private Agency agency;

    @ManyToOne
    @JoinColumn(name="scheme_id",nullable = false)
    private Scheme scheme;

}
