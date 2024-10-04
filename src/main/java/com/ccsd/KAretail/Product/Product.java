package com.ccsd.KAretail.Product;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product")
public class Product {
    @Id
    private String id;
    private String code;
    private String productName;
    private double price;
    private String description;

    public Product(String id, String code, String productName, double price, String description){
        this.id = id;
        this.code = code;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }               
    
    //setter
    public void setId(String id) {
        this.id = id;
    }
    public void setProductName(String productName){
        this.productName = productName;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public void setDescription(String description){
        this.description = description;
    }

    //getter
    public String getId() {
        return id;
    }
    public String getProductName(){
        return productName;
    }
    public double getPrice(){
        return price;
    }
    public String getDescription(){
        return description;
    }
}
