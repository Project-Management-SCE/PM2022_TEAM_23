package com.example.demo;

import com.example.demo.Account.Account;
import com.example.demo.Account.AccountRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@ComponentScan(basePackages = "Account")
@Configuration
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(AccountRepository repository){
		return args -> {
			Account account = new Account(
					"tomerbe3",
					"tomerbe3@gmail.com",
					"Tomer123"
			);
			//repository.save(account);
		};
	}
}
