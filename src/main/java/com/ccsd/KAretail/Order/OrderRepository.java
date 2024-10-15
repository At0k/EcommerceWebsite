package com.ccsd.KAretail.Order;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ccsd.KAretail.Users.User;

public interface OrderRepository extends MongoRepository<Order, String> {

    List<Order> findByUser(User user);
    
}