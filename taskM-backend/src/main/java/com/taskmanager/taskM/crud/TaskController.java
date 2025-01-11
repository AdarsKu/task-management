package com.taskmanager.taskM.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TaskController {

	    @Autowired
	    private Repository taskRepository;

	    @GetMapping
	    public List<TasksData> getAllTasks() {
	        return taskRepository.findAll();
	    }

	    @PostMapping
	    public TasksData createTask(@RequestBody TasksData task) {
	        return taskRepository.save(task);
	    } 
	    

	    @PutMapping("/{id}")
	    public TasksData updateTask(@PathVariable Long id, @RequestBody TasksData updatedTask) {
	        return taskRepository.findById(id).map(task -> {
	            task.setTitle(updatedTask.getTitle());
	            task.setpriority(updatedTask.getpriority());
	            task.setStatus(updatedTask.getStatus());
	            return taskRepository.save(task);
	        }).orElseThrow(() -> new RuntimeException("Task not found"));
	    }

	    @DeleteMapping("/{id}")
	    public void deleteTask(@PathVariable Long id) {
	        taskRepository.deleteById(id);
	    }
	}

