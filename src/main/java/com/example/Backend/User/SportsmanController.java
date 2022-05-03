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

    @GetMapping("/getSportsman")
    public List<Sportsman> getSportsman() {return sportsmanRepository.findAll();}

    @GetMapping(value="/auth/{userName}/{password}")
    public Optional<Sportsman> SportsmanAuth(@PathVariable String userName,@PathVariable String password){
        Optional<Sportsman> sportsman = sportsmanRepository.findById(userName);
        if (sportsman.isPresent())
        {
            if (sportsman.get().getPassword() == password)
            {
                return sportsman;
            }
        }
        return sportsman;
    }

    @PostMapping("/sign_up")
    public Sportsman saveSportsman(@RequestBody Sportsman sportsman){ return sportsmanRepository.save(sportsman); }

    @DeleteMapping("/{userName}")
    public String deleteSportsman(@PathVariable String userName){
        sportsmanRepository.deleteById(userName);
        return "User " + userName + "deleted";
    }
}
