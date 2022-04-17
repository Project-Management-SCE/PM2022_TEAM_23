package com.example.Backend;

import com.example.Backend.User.Admin;
import com.example.Backend.User.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

//	@Bean
//	@Autowired
//	CommandLineRunner runner(AdminRepository repository){
//		return args -> {
//			Admin admin = new Admin(
//					"tomerbe3",
//					"tomerbe3@gmail.com",
//					"12324",
//					"Tomer",
//					"Ben Shimol",
//					1996,
//					9,
//					19,
//					1.8F,
//					80F,
//					"0524858601"
//			);
//			repository.save(admin);
//		};
//	}
}