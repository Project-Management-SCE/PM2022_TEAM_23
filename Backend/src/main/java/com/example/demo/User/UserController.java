package com.example.demo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository accountRepository;

    @PostMapping("signUp")
    public String signUp(@RequestBody User user)
    {
        accountRepository.save(user);
        return "Registration complete";
    }

    @GetMapping("users")
    public List<User> getUsers()
    {
        return accountRepository.findAll();
    }

    @GetMapping("users/{id}")
    public Optional<User> getUser(@PathVariable String id)
    {
        return accountRepository.findById(id);
    }

    @DeleteMapping(path ="delete/{id}")
    public String deleteUser(@PathVariable String id)
    {
        accountRepository.deleteById(id);
        return "User deleted";
    }
}

