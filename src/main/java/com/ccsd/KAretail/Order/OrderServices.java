package com.ccsd.KAretail.Order;

<<<<<<< HEAD
=======
import java.time.LocalDate;
>>>>>>> e6aa59ff4dec15183883cb837bea0a69499c051d
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
<<<<<<< HEAD

import com.ccsd.KAretail.Order.Order;
import com.ccsd.KAretail.Order.OrderRepository;
=======
import com.ccsd.KAretail.Product.Product;
>>>>>>> e6aa59ff4dec15183883cb837bea0a69499c051d

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

            Order Order = orderOpt.get();
            Order.setOrderId(orderDetails.getOrderId());
            Order.setOrderDate(orderDetails.getOrderDate());
            return orderRepository.save(Order);
        }
        return null;
    }
    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }
<<<<<<< HEAD
}
=======

    //checkout process
    public Order checkout(List<Product> productList){
        int orderId = generateOrderId();
        LocalDate orderDate = LocalDate.now();
        Order newOrder = new Order(orderId, orderDate, productList);
        return orderRepository.save(newOrder);
    }

    private int generateOrderId() {
        return (int) (Math.random() * 10000); 
    }
} 
>>>>>>> e6aa59ff4dec15183883cb837bea0a69499c051d
