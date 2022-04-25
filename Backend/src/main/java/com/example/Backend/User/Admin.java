package com.example.Backend.User;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Admin extends User {
    public Admin(String userName, String email, String password, String firstName, String lastName, Integer yearOfBirth, Integer monthOfBirth, Integer dayOfBirth, Float height, Float weight, String phoneNumber) {
        super(userName, email, password, firstName, lastName, yearOfBirth, monthOfBirth, dayOfBirth, height, weight, phoneNumber);
        super.setAdmin();
    }

    @Override
    public String getType() {
        return super.getType();
    }

    @Override
    public String getID() {
        return super.getID();
    }

    @Override
    public void setID(String ID) {
        super.setID(ID);
    }

    @Override
    public String getUserName() {
        return super.getUserName();
    }

    @Override
    public void setUserName(String userName) {
        super.setUserName(userName);
    }

    @Override
    public String getEmail() {
        return super.getEmail();
    }

    @Override
    public void setEmail(String email) {
        super.setEmail(email);
    }

    @Override
    public String getPassword() {
        return super.getPassword();
    }

    @Override
    public String getFirstName() {
        return super.getFirstName();
    }

    @Override
    public void setFirstName(String firstName) {
        super.setFirstName(firstName);
    }

    @Override
    public String getLastName() {
        return super.getLastName();
    }

    @Override
    public void setLastName(String lastName) {
        super.setLastName(lastName);
    }

    @Override
    public Integer getYearOfBirth() {
        return super.getYearOfBirth();
    }

    @Override
    public Integer getMonthOfBirth() {
        return super.getMonthOfBirth();
    }

    @Override
    public Integer getDayOfBirth() {
        return super.getDayOfBirth();
    }

    @Override
    public Float getHeight() {
        return super.getHeight();
    }

    @Override
    public Float getWeight() {
        return super.getWeight();
    }

    @Override
    public String getPhoneNumber() {
        return super.getPhoneNumber();
    }

    @Override
    public void setPassword(String password) {
        super.setPassword(password);
    }

    @Override
    public void setHeight(Float height) {
        super.setHeight(height);
    }

    @Override
    public void setWeight(Float weight) {
        super.setWeight(weight);
    }

    @Override
    public void setPhoneNumber(String phoneNumber) {
        super.setPhoneNumber(phoneNumber);
    }

    @Override
    public void setAdmin() {
        super.setAdmin();
    }

    @Override
    public void setCoach() {
        super.setCoach();
    }

    @Override
    public void setSportsman() {
        super.setSportsman();
    }
}
