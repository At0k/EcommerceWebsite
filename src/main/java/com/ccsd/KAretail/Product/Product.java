package com.ccsd.KAretail.Product;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "product")
public class Product {
    @Id
    private String id;
    private String code;
    private String image;
    private String productName;
    private double price;
    private String description;
    private int quantity;

    public Product(String id, String code, String image, String productName, double price, String description, int quantity){
        this.id = id;
        this.code = code;
        this.image = image;
        this.productName = productName;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }               
    
    //setter
    public void setId(String id) {
        this.id = id;
    }
    public void setCode(String code){
        this.code = code;
    }
    public void setImage(String image){
        this.image = image;
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
    public void setQuantity(int quantity){
        this.quantity = quantity;
    }

    //getter
    public String getId() {
        return id;
    }
    public String getCode(){
        return code;
    }
    public String getImage(){
        return image;
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
    public int getQuantity(){
        return quantity;
    }

    public double calculateTotalPrice() {
        return this.price * this.quantity;
    }
}
