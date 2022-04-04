package com.example.demo.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

public class AccountController {

    @Autowired
    private  AccountRepository accountRepository;

    @PostMapping(path = "/registerAccount")
    public String registerAccount(@RequestBody Account account)
    {
        accountRepository.save(account);
        return "Registration is complete";
    }

    @GetMapping(path ="/findAllAccounts")
    public List<Account> getAccounts()
    {
        return accountRepository.findAll();
    }

    @GetMapping(path ="/findAllAccounts/{id}")
    public Optional<Account> getAccount(@PathVariable String id)
    {
        return accountRepository.findById(id);
    }

    @DeleteMapping(path ="/delete/{id}")
    public String deleteAccount(@PathVariable String id)
    {
        accountRepository.deleteById(id);
        return "Account deleted";
    }
}

