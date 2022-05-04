package com.example.Backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("coach/")
@CrossOrigin
public class CoachController {
    @Autowired
    private CoachRepository coachRepository;

    @GetMapping("/getCoach")
    public List<Coach> getCoach() {return coachRepository.findAll();}

    @GetMapping(value="/auth/{userName}/{password}")
    public Optional<Coach> CoachAuth(@PathVariable String userName,@PathVariable String password){
        Optional<Coach> coach = coachRepository.findById(userName);
        if (coach.isPresent())
        {
            if (coach.get().getPassword() == password)
            {
                return coach;
            }
        }
        return coach;
    }

    @PostMapping("/sign_up")
    public Coach saveCoach(@RequestBody Coach coach)
    {
        if(coach.check_licenseNumber_API()) //&& coach.check_workPlaceId_API())
            return coachRepository.save(coach);
        else
            return null;
    }

    @DeleteMapping("deleteCoach/{userName}")
    public String deleteCoach(@PathVariable String userName){
        coachRepository.deleteById(userName);
        return "Coach " + userName + "deleted";
    }
}

