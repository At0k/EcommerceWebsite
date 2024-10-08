// package com.ccsd.KAretail.Order;

// import java.time.LocalDate;
// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.ccsd.KAretail.Order.Order;
// import com.ccsd.KAretail.Order.OrderRepository;
// import com.ccsd.KAretail.Product.Product;

// @Service
// public class OrderServices {
     
//     @Autowired
//     private OrderRepository orderRepository;

//     public List<Order> getAllOrder() {
//         return orderRepository.findAll();
//     }

//     public Optional<Order> getOrderById(String id){
//         return orderRepository.findById(id);
//     }

//     public Order addOrder(Order order){
//         return orderRepository.save(order);
//     }

//     public Order updateOrder(String id, Order orderDetails) {
//         Optional<Order> orderOpt = orderRepository.findById(id);
//         if (orderOpt.isPresent()) {

//             Order Order = orderOpt.get();
//             Order.setOrderId(orderDetails.getOrderId());
//             Order.setOrderDate(orderDetails.getOrderDate());
//             return orderRepository.save(Order);
//         }
//         return null;
//     }
//     public void deleteOrder(String id) {
//         orderRepository.deleteById(id);
//     }

//     //checkout process
//     public Order checkout(List<Product> productList){
//         int orderId = generateOrderId();
//         LocalDate orderDate = LocalDate.now();
//         Order newOrder = new Order(orderId, orderDate, productList);
//         return orderRepository.save(newOrder);
//     }

//     private int generateOrderId() {
//         return (int) (Math.random() * 10000); 
//     }
// } 