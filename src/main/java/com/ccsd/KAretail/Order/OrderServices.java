package com.ccsd.KAretail.Order;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ccsd.KAretail.Product.Product;
import com.ccsd.KAretail.Users.User;

@Service
public class OrderServices {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(String id){
        return orderRepository.findById(id);
    }

    public Order addOrder(Order order){
        return orderRepository.save(order);
    }

    public Order updateOrder(String id, Order orderDetails) {
        Optional<Order> orderOpt = orderRepository.findById(id);
        if (orderOpt.isPresent()) {

            Order order = orderOpt.get();
            order.setOrderId(orderDetails.getOrderId());
            order.setOrderDate(orderDetails.getOrderDate());
            order.setProductList(orderDetails.getProductList());
            order.setUser(orderDetails.getUser()); // Update the user as well
            return orderRepository.save(order);
        }
        return null;
    }

    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }

    // Checkout process with user information
    public Order checkout(List<Product> productList, User user) {
        int orderId = generateOrderId();
        LocalDate orderDate = LocalDate.now();
        
        Order newOrder = new Order(orderId, orderDate, productList); // Include the User object
        return orderRepository.save(newOrder);
    }

    private int generateOrderId() {
        return (int) (Math.random() * 10000); 
    }
}
