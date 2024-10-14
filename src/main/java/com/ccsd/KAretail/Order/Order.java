package com.ccsd.KAretail.Order;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.ccsd.KAretail.Product.Product;
import com.ccsd.KAretail.Users.User;

import java.util.List;
import java.time.LocalDate;

@Document(collection = "order")

public class Order {
    
    @Id
    private int orderId;
    private LocalDate orderDate;
    private List<Product> productList;
    private double totalAmount;
    private User user;

    public Order(int orderId, LocalDate orderDate, List<Product> productList, User user) {
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.productList = productList;
        this.totalAmount = calculateTotalAmount();
        this.user = user; 
    }                                                                      

    //setter
    public void setOrderId(int orderId){
        this.orderId = orderId;
    }
    public void setOrderDate(LocalDate orderDate){
        this.orderDate = orderDate;
    }
    public void setProductList(List<Product> productList) {
        this.productList = productList;
        this.totalAmount = calculateTotalAmount(); // Recalculate when the product list is updated
    }
    public void setUser(User user) {
        this.user = user;
    }

    //getter
    public int getOrderId(){
        return orderId;
    }
    public LocalDate getOrderDate(){
        return orderDate;
    }
    public List<Product> getProductList() {
        return productList;
    }
    public double getTotalAmount() {
        return totalAmount;
    }
    public User getUser() {
        return user;
    }

    //method
    private double calculateTotalAmount() {
        
        float total = 0;
        for (Product product : productList) {
            total += product.calculateTotalPrice();
        }
        return total;
        
    }
}