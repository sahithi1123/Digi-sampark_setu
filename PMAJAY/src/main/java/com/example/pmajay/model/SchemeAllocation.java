package com.example.pmajay.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class SchemeAllocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "scheme_id", nullable = false)
    private Scheme scheme;

    @ManyToOne
    @JoinColumn(name = "state_id", nullable = false)
    private State state;

    @ManyToMany
    @JoinTable(
        name = "allocation_agency",
        joinColumns = @JoinColumn(name = "allocation_id"),
        inverseJoinColumns = @JoinColumn(name = "agency_id")
    )
    private List<Agency> agencies;

    private BigDecimal fundReleased;
    private BigDecimal fundUtilized;
    private LocalDate allocationDate;
    private String status; 
}

