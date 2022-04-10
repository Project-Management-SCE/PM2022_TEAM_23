package com.example.Backend.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Calendar;
import java.util.Date;

@Document
public abstract class User {
    @Id
    private String ID;
    @Indexed(unique = true)
    private String userName;
    private String email;
    private String password;
    private String type;
    private String firstName;
    private String lastName;
    private Calendar dateOfBirth = Calendar.getInstance();
    private Float height;
    private Float weight;
    private String phoneNumber;

    public User(String userName, String email, String password, String firstName, String lastName, Integer year, Integer month, Integer day, Float height, Float weight, String phoneNumber) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth.set(year,month,day);
        this.height = height;
        this.weight = weight;
        this.phoneNumber = phoneNumber;
    }

    public String getType() {
        return type;
    }

    public String getID() {
        return ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDateOfBirth() {
        return dateOfBirth.getTime();
    }

    public void setDateOfBirth(int year, int month, int day) {
        this.dateOfBirth.set(year,month,day);
    }

    public Float getHeight() {
        return height;
    }

    public Float getWeight() {
        return weight;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAdmin() {
        type = "Admin";
    }

    public void setCoach() {
        type = "Coach";
    }

    public void setSportsman() {
        type = "Sportsman";
    }

}

