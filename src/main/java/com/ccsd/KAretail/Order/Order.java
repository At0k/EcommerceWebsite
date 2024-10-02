package com.ccsd.KAretail.Order;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document(collection = "order")
public class Order {
    @Id
    private int orderId;
    private LocalDate orderDate;
    private float totalAmount;

    public Order(int orderId, LocalDate orderDate){
        this.orderId = orderId;
        this.orderDate = orderDate;
    }                                                                   

    //setter
    public void setOrderId(int orderId){
        this.orderId = orderId;
    }
    public void setOrderDate(LocalDate orderDate){
        this.orderDate = orderDate;
    }

    //getter
    public int getOrderId(){
        return orderId;
    }
    public LocalDate getOrderDate(){
        return orderDate;
    }
}