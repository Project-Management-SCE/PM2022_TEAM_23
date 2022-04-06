package com.example.demo.User;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
public class Admin extends User {
    public Admin(String userName, String email, String password, String firstName, String lastName, Integer year, Integer month, Integer day, Float height, Float weight, String phoneNumber) {
        super(userName, email, password, firstName, lastName, year, month, day, height, weight, phoneNumber);
        super.setAdmin();
    }
}
