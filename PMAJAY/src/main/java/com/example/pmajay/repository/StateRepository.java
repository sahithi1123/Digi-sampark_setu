package com.example.pmajay.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pmajay.model.State;

@Repository
public interface StateRepository extends JpaRepository<State,Long>{

    State findByEmail(String email);

    State findByName(String state);

    State findByNameIgnoreCase(String state);

}
