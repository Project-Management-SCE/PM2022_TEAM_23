package com.example.Backend.User;

import org.omg.CORBA.PUBLIC_MEMBER;
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

    @GetMapping("/updateWeight/{userName}/{weight}")
    public Optional<Sportsman> changeWeight(@PathVariable String userName,@PathVariable float weight)
    {
        Optional<Sportsman> sportsman = sportsmanRepository.findById(userName);
        if (sportsman.isPresent())
        {
            sportsman.get().setWeight(weight);
            sportsmanRepository.save(sportsman.get());
        }
        return sportsman;
    }

    @GetMapping("/updateSport/{userName}/{sportName}")
    public Optional<Sportsman> changeSport(@PathVariable String userName,@PathVariable String sportName)
    {
        Optional<Sportsman> sportsman = sportsmanRepository.findById(userName);
        if (sportsman.isPresent())
        {
            sportsman.get().setSport(sportName);
            sportsmanRepository.save(sportsman.get());
        }
        return sportsman;
    }

    @PostMapping("/sign_up")
    public Sportsman saveSportsman(@RequestBody Sportsman sportsman){ return sportsmanRepository.save(sportsman); }

    @DeleteMapping("deleteSportsman/{userName}")
    public String deleteSportsman(@PathVariable String userName){
        sportsmanRepository.deleteById(userName);
        return "Sportsman " + userName + "deleted";
    }
}
