package com.example.pmajay.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data 
public class Scheme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String name;
    private String description;
    private Double budget;

    private Double releasedAmount;

    private Double utilizedAmount;

    private String status;
    @ManyToOne
    @JoinColumn(name="central_id",nullable=false)
    private Central central;
 
    @ManyToOne
    @JoinColumn(name = "state_id", nullable = false)
    private State state;

    @OneToMany(mappedBy = "scheme", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Complaint> complaints;
 

}
  