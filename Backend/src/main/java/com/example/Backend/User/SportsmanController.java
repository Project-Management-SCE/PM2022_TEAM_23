package com.example.Backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("sportsman/")
@CrossOrigin
public class SportsmanController {
    @Autowired
    private SportsmanRepository sportsmanRepository;

    @GetMapping("/")
    public List<Sportsman> getASportmans() {return sportsmanRepository.findAll();}

    @GetMapping("/{id}")
    public Optional<Sportsman> getSportsmanByID(@PathVariable String id){
        return sportsmanRepository.findById(id);
    }

    @PostMapping("/sign_up")
    public Sportsman saveSportsman(@RequestBody Sportsman sportsman){ return sportsmanRepository.save(sportsman); }

    @DeleteMapping("/{id}")
    public String deleteSportsman(@PathVariable String id){
        sportsmanRepository.deleteById(id);
        return "User " + id + "deleted";
    }
}
