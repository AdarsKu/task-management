package com.taskmanager.taskM.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
	
	@Autowired
	Repository repo;
	
	////// Login authentication by taking name and pass and if it present then return the same
	@GetMapping("/hi/{name}/{pass}")
	public LoginData massage(@PathVariable String name,@PathVariable String pass) {
		LoginData b= repo.findByNameAndPass( name,  pass).get();
		System.out.println("called");
		return b;
	}
	
	
}
