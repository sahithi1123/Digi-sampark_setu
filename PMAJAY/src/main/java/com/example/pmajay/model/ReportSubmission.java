package com.example.pmajay.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class ReportSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String details;
    private LocalDate submissionDate;
    private String pdfPath; // store PDF file reference

    @ManyToOne
    @JoinColumn(name="agency_id",nullable=false)  
    private Agency agency;

    @ManyToOne
    @JoinColumn(name="state_id",nullable=false)
    private State state;

}

