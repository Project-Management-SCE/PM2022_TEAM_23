package com.example.Backend.User;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Sportsman extends User {
    private String level;

    public Sportsman(String userName,
                     String email,
                     String password,
                     String firstName,
                     String lastName,
                     Integer year,
                     Integer month,
                     Integer day,
                     Float height,
                     Float weight,
                     String phoneNumber,
                     String level) {
        super(userName, email, password, firstName, lastName, year, month, day, height, weight, phoneNumber);
        super.setSportsman();
        this.level = level;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
