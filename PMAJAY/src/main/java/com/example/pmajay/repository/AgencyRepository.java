package com.example.pmajay.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pmajay.model.Agency;

public interface AgencyRepository extends JpaRepository<Agency,Long> {

    Agency findByEmail(String email);

    Agency findByIdAndEmail(Long id, String email);

}
