package com.ccsd.KAretail.Billing;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Billing")
public class Billing {

    @Id
    private String billingId;
    private String name;
    private String address;
    private String city;
    private int postcode;
    private String country;

    // Constructor
    public Billing(String billingId, String name, String address, String city, int postcode, String country) {
        this.billingId = billingId;
        this.name = name;
        this.address = address;
        this.city = city;
        this.postcode = postcode;
        this.country = country;
    }
    // Getter
    public String getBillingId() {
        return billingId;
    }
    public String getName() {
        return name;
    }
    public String getAddress() {
        return address;
    }
    public String getCity() {
        return city;
    }
    public int getPostcode() {
        return postcode;
    }
    public String getCountry() {
        return country;
    }

    // Setter
    public void setBillingId(String billingId) {
        this.billingId = billingId;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }
    public void setCountry(String country) {
        this.country = country;
    }
}
