package com.taskmanager.taskM.login;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;



public interface Repository extends JpaRepository<LoginData, Integer> {

	 Optional<LoginData> findByNameAndPass(String name, String pass);

}
