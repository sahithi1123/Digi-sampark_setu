package com.example.pmajay.repository;

import java.util.List;

// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.pmajay.model.Scheme;
import com.example.pmajay.model.State;

@Repository
public interface SchemeRepository extends JpaRepository<Scheme,Long> {

      List<Scheme> findAllByState(State stateEntity);

}
