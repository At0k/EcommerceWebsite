package com.ccsd.KAretail.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServices {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String id){
        return productRepository.findById(id);
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public Product updateProduct(String id, Product productDetails) {
        Optional<Product> productOpt = productRepository.findById(id);
        if (productOpt.isPresent()) {

            Product product = productOpt.get();
            product.setProductName(productDetails.getProductName());
            product.setPrice(productDetails.getPrice());
            product.setDescription(productDetails.getDescription());
            return productRepository.save(product);
        }
        return null;
    }
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
    
}
