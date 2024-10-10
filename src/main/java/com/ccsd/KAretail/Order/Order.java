package com.ccsd.KAretail.Order;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.ccsd.KAretail.Product.Product;
import java.util.List;
import java.time.LocalDate;

@Document(collection = "order")
public class Order {
    @Id
    private int orderId;
    private LocalDate orderDate;
    private List<Product> productList;
    private double totalAmount;

    public Order(int orderId, LocalDate orderDate, List<Product> productList){
        this.orderId = orderId;
        this.orderDate = orderDate;
        this.productList = productList;
        this.totalAmount = calculateTotalAmount();
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

    //method
    private double calculateTotalAmount() {
        //return productList.stream().mapToDouble(Product::calculateTotalPrice).sum();
        float total = 0;
        for (Product product : productList) {
            total += product.calculateTotalPrice();
        }
        return total;
        
    }
}