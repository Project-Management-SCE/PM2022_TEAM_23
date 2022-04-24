package com.example.Backend.User;

import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/{id}")
    public Optional<Admin> getAdminByID(@PathVariable String id){
        return adminRepository.findById(id);
    }

    @PostMapping("/")
    public Admin saveAdmin(@RequestBody Admin admin){
        return adminRepository.save(admin);
    }

    @DeleteMapping("/{id}")
    public String deleteAdmin(@PathVariable String id){
        adminRepository.deleteById(id);
        return "User " + id + "deleted";
    }


}
