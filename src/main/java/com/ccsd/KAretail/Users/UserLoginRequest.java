package com.ccsd.KAretail.Users;

public class UserLoginRequest {

    private String email;
    private String password;

    public UserLoginRequest() {}

    //Getter
    public String getEmail(){
        return email;
    }

    public String getPassword(){
        return password;
    }

    //Setter
    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String password){
        this.password = password;
    }
    
}
