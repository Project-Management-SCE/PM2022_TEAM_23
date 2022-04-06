package com.example.demo;
import com.example.demo.User.Admin;
import com.example.demo.User.AdminRepository;
import com.example.demo.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@ComponentScan(basePackages = "User")
@Configuration
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	@Autowired
	CommandLineRunner runner(AdminRepository repository){
		return args -> {
		Admin admin = new Admin(
				"tomerbe3",
				"tomerbe3@gmail.com",
				"12324",
				"Tomer",
				"Ben Shimol",
				1996,
				9,
				19,
				(float)1.8,
				(float)80.0,
				"0524858601"
		);
			repository.save(admin);
		};
	}
}
