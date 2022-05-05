package com.example.Backend.User;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.client.RestTemplate;

@Document
public class Coach extends User{
    private String licenseNumber;
    private String workPlaceId;
    private String sportKind;
    private String[][] commonInjuries;

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
        this.commonInjuries = new String[4][3];
        this.commonInjuries[0][0] = "Name";
        this.commonInjuries[0][1] = "Caused by";
        this.commonInjuries[0][2] = "Treatment";
        for (int i = 1;i<4;i++){
            for (int j=0;j<3;j++){
                this.commonInjuries[i][j] = "Coming Soon...";
            }
        }
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

    public void setSportKind(String sportKind) {
        this.sportKind = sportKind;
    }

    public String[][] getCommonInjuries() {
        return commonInjuries;
    }

    public void setCommonInjury(String name,String causedBy,String treatment,int row) {
        if(row > 0 && row < 4) {
            this.commonInjuries[row][0] = name;
            this.commonInjuries[row][1] = causedBy;
            this.commonInjuries[row][2] = treatment;
        }
    }
}
