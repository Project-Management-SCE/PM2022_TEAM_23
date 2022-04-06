package com.example.Backend.User;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Coach extends User{
    private String licenseNumber;
    private String workPlaceId;

    public Coach(String userName, String email, String password, String firstName, String lastName, Integer year, Integer month, Integer day, Float height, Float weight, String phoneNumber, String licenseNumber, String workPlaceId) {
        super(userName, email, password, firstName, lastName, year, month, day, height, weight, phoneNumber);
        super.setCoach();
        this.licenseNumber = licenseNumber;
        this.workPlaceId = workPlaceId;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getWorkPlaceId() {
        return workPlaceId;
    }

    public void setWorkPlaceId(String workPlaceId) {
        this.workPlaceId = workPlaceId;
    }
}
