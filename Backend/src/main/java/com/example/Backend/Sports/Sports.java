package com.example.Backend.Sports;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Sports {
    @Id
    private String name;
    private String description;
    private String coach;

    public Sports(String name, String description, String coach) {
        this.name = name;
        this.description = description;
        this.coach = coach;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getCoach() {
        return coach;
    }

    @Override
    public String toString() {
        return "Sports{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", coach='" + coach + '\'' +
                '}';
    }
}
