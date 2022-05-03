package com.example.Backend.User;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.client.RestTemplate;

@Document
public class Coach extends User{
    private String licenseNumber;
    private String workPlaceId;
    private String sportKind;

    public Coach(String userName,
                 String email,
                 String password,
                 String firstName,
                 String lastName,
                 Integer yearOfBirth,
                 Integer monthOfBirth,
                 Integer dayOfBirth,
                 Float height,
                 Float weight,
                 String phoneNumber,
                 String licenseNumber,
                 String workPlaceId,
                 String sportKind) {
        super(userName, email, password, firstName, lastName, yearOfBirth, monthOfBirth, dayOfBirth, height, weight, phoneNumber);
        super.setCoach();
        this.licenseNumber = licenseNumber;
        this.workPlaceId = workPlaceId;
        this.sportKind = sportKind;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public boolean check_licenseNumber_API()
    {
        String url = "https://practitionersapi.health.gov.il/Practitioners/api/Practitioners/GetLicenses?licenseNum=&maxResults=1000&professionId=10&practitionerName=&certificate=";
        RestTemplate restTemplate = new RestTemplate();
        String Licenses = restTemplate.getForObject(url,String.class);
        if(Licenses.contains(this.getLicenseNumber()))
            return true;
        else
            return false;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getWorkPlaceId() {
        return workPlaceId;
    }

    public boolean check_workPlaceId_API()
    {
        String url = "https://data.gov.il/api/3/action/datastore_search?resource_id=2304b5de-c720-4b5c-bbc7-4cbab85e0ae8";
        RestTemplate restTemplate = new RestTemplate();
        String Facilities = restTemplate.getForObject(url,String.class);
        if(Facilities.contains(this.getWorkPlaceId()))
            return true;
        else
            return false;
    }

    public void setWorkPlaceId(String workPlaceId) {
        this.workPlaceId = workPlaceId;
    }

    public String getSportKind() {
        return sportKind;
    }
}
