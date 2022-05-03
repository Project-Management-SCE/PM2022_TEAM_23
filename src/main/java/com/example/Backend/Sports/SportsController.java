package com.example.Backend.Sports;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("sports/")
@CrossOrigin
public class SportsController {
    @Autowired
    private SportsRepository sportsRepository;

    @GetMapping("/getSports")
    public List<Sports> getSports() {return sportsRepository.findAll();}

    @GetMapping("/{id}")
    public Optional<Sports> getSportsByID(@PathVariable String id){
        return sportsRepository.findById(id);
    }

    @PostMapping("/add")
    public Sports saveSport(@RequestBody Sports sport){ return sportsRepository.save(sport); }

    @DeleteMapping("/{id}")
    public String deleteSport(@PathVariable String id) {
        sportsRepository.deleteById(id);
        return "Sport: " + id + "deleted";
    }
}
