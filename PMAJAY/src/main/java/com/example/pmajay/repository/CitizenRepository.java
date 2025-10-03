package com.example.pmajay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pmajay.model.Citizen;

@Repository
public interface CitizenRepository  extends JpaRepository<Citizen,Long>{

    Citizen findByEmail(String email);


}
