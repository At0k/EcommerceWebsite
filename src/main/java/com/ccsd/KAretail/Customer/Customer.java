package com.ccsd.KAretail.Customer;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.ccsd.KAretail.Users.Users;
@Document(collection = "customer")

public class Customer extends Users{
    
    @Id
    private int id ;
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String phoneNo;

    public Customer(int id, String username, String password, String fullname, String email, String phoneNo){
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phoneNo = phoneNo;
    }                                                                   

    //setter

    public void setUsername(String username){
        this.username = username;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public void setFullname(String fullname){
        this.fullname = fullname;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPhoneNo(String phoneNo){
        this.phoneNo = phoneNo;
    }

    //getter
    public String getUsername(){
        return username;
    }

    public String getPassword(){
        return password;
    }

    public String getFullname(){
        return fullname;
    }

    public String getEmail(){
        return email;
    }

    public String getPhoneNo(){
        return phoneNo;
    }
}