package com.example.Backend.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("admin/")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/getAdmin")
    public List<Admin> getAdmin(){
        return adminRepository.findAll();
    }

    @GetMapping(value="/auth/{userName}/{password}")
    public Optional<Admin> AdminAuth(@PathVariable String userName,@PathVariable String password){
        Optional<Admin> admin = adminRepository.findById(userName);
        if (admin.isPresent())
        {
            if (admin.get().getPassword() == password)
            {
                return admin;
            }
        }
        return admin;
    }

    @PostMapping("/")
    public Admin saveAdmin(@RequestBody Admin admin){
        return adminRepository.save(admin);
    }

    @DeleteMapping("/{userName}")
    public String deleteAdmin(@PathVariable String userName){
        adminRepository.deleteById(userName);
        return "User " + userName + "deleted";
    }
}
