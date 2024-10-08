// package com.ccsd.KAretail.Order;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.ccsd.KAretail.Order.Order;
// import com.ccsd.KAretail.Order.OrderServices;
// import com.ccsd.KAretail.Product.Product;

// @RestController
// @RequestMapping("/api/Order")
// public class OrderController {
//     @Autowired
//     private OrderServices orderService;

//     @GetMapping
//     public List<Order> getAllOrder() {
//         return orderService.getAllOrder();
//     }
    
//     @GetMapping("/{id}")
//     public ResponseEntity<Order> getOrderById(@PathVariable String id) {
//         return orderService.getOrderById(id)
//                 .map(ResponseEntity::ok)
//                 .orElse(ResponseEntity.notFound().build());
//     }

//     @PostMapping
//     public Order addOrder(@RequestBody Order Order) {
//         return orderService.addOrder(Order);
//     }

//     @PutMapping("/{id}")
//     public ResponseEntity<Order> updateOrder(@PathVariable String id, @RequestBody Order OrderDetails) {
//         Order updatedOrder = orderService.updateOrder(id, OrderDetails);
//         if (updatedOrder != null) {
//             return ResponseEntity.ok(updatedOrder);
//         }
//         return ResponseEntity.notFound().build();
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteOrder(@PathVariable String id) {
//         orderService.deleteOrder(id);
//         return ResponseEntity.noContent().build();
//     }

//     @PostMapping("/checkout")
//     public ResponseEntity<Order> checkout(@RequestBody List<Product> productList) {
//         Order newOrder = orderService.checkout(productList);
//         return ResponseEntity.ok(newOrder);
//     }
// }