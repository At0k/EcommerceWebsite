package com.ccsd.KAretail.Staff;

import com.ccsd.KAretail.Users.Users;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "staff")
public class Staff extends Users {
    @Id
    private String id;
    private String username;
    private String password;
    private String email;

    public Staff(String id, String username, String password, String email){
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
    }         
    
     //setter
     public void setUsername(String username){
        this.username = username;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setEmail(String email){
        this.email = email;
    }

    //getter
    public String getUsername(){
        return username;
    }
    public String getPassword(){
        return password;
    }
    public String getEmail(){
        return email;
    }

}