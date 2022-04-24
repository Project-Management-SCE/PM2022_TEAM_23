package com.example.Backend;

import com.example.Backend.Sports.Sports;
import com.example.Backend.Sports.SportsRepository;
import com.example.Backend.User.*;
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
//	CommandLineRunner runner(SportsRepository repository, AdminRepository adminRepository, CoachRepository coachRepository, SportsmanRepository sportsmanRepository){
//		return args -> {
//			Admin admin1 = new Admin(
//				"tomerbe3",
//					"tomerbe3@gmail.com",
//					"tomer123",
//					"Tomer",
//					"Ben Shimol",
//					1996,
//					9,
//					19,
//					1.80F,
//					82F,
//					"0524858601"
//			);
//
//			Sportsman sportsman = new Sportsman(
//					"david12",
//					"david12@gmail.com",
//					"david123",
//					"David",
//					"Davidov",
//					2001,
//					1,
//					1,
//					1.90F,
//					85F,
//					"0501116677",
//					"Semi-Pro",
//					"Football"
//			);
//
//			Sports sports = new Sports(
//					"Football",
//					"A team sport played with a spherical ball between two teams of 11 players. It is played by approximately 250 million players in over 200 countries.",
//					"Matan Ben Ishay"
//			);
//			Sports sports2 = new Sports(
//					"CrossFit",
//					"CrossFit is a movement with over 5 million athletes and over 14,000 locations across the planet.",
//					"Tomer Ben Shimol"
//			);
//			repository.save(sports);
//			repository.save(sports2);
//			adminRepository.save(admin1);
//			sportsmanRepository.save(sportsman);
//		};
//	}
}