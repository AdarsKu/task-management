package com.taskmanager.taskM.crud;

import org.springframework.data.jpa.repository.JpaRepository;


@org.springframework.stereotype.Repository("crudRepository")
public interface Repository extends JpaRepository<TasksData, Long> {

}
