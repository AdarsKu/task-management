package com.taskmanager.taskM;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TaskMApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskMApplication.class, args);
	}
	
	
	//Allow all requests only from http://localhost:3000/ 
	
			@Bean
			public WebMvcConfigurer corsConfigurer() {
				
				return new WebMvcConfigurer() {
					@Override
					public void addCorsMappings(CorsRegistry registry) {
						registry.addMapping("/**") //enabling for everything
						.allowedMethods("*")    // enabling to access all the method 
						.allowedOrigins("http://localhost:5173");
					}
				};
			}


}
