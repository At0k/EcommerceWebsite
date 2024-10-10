package com.ccsd.KAretail.Users;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
<<<<<<< HEAD:src/main/java/com/ccsd/KAretail/Customer/Customer.java
import com.ccsd.KAretail.Users.Users;

@Document(collection = "customer")

public class Customer extends Users{
=======

@Document(collection = "user")
public class User {
>>>>>>> e6aa59ff4dec15183883cb837bea0a69499c051d:src/main/java/com/ccsd/KAretail/Users/User.java
    
    @Id
    private String id;
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String phoneNo;
    private String role; // 1.Staff 2.Customer

    public User(String id, String username, String password, String fullname, String email, String phoneNo, String role){
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phoneNo = phoneNo;
        this.role = role;
    }                                                                   

    //setter
    public void setId(String id){
        this.id = id;
    }
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
    public void setRole(String role){
        this.role = role;
    }

    //getter
    public String getId(){
        return id;
    }
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
    public String getRole(){
        return role;
    }

    public Object findByEmail(String email2) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByEmail'");
    }
}