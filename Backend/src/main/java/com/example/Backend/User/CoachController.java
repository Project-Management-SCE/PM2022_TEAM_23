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

    @GetMapping("/{id}")
    public Optional<Coach> getCoachByID(@PathVariable String id){
        return coachRepository.findById(id);
    }

    @GetMapping("/getCoach")
    public List<Coach> getCoach() {return coachRepository.findAll();}

    @PostMapping("/sign_up")
    public Coach saveCoach(@RequestBody Coach coach)
    {
        if(coach.check_licenseNumber_API() && coach.check_workPlaceId_API())
            return coachRepository.save(coach);
        else
            return null;
    }

    @DeleteMapping("/{id}")
    public String deleteCoach(@PathVariable String id){
        coachRepository.deleteById(id);
        return "Coach " + id + "deleted";
    }
}

