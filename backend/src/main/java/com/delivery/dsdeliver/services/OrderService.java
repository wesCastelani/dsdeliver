package com.delivery.dsdeliver.services;

import com.delivery.dsdeliver.dto.OrderDTO;
import com.delivery.dsdeliver.dto.ProductDTO;
import com.delivery.dsdeliver.entities.Order;
import com.delivery.dsdeliver.entities.OrderStatus;
import com.delivery.dsdeliver.entities.Product;
import com.delivery.dsdeliver.repositories.OrderRepository;
import com.delivery.dsdeliver.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository pRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    }
    @Transactional
    public OrderDTO insert(OrderDTO dto){
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
        for( ProductDTO p: dto.getProducts()){
            Product product = pRepository.getOne(p.getId());
            order.getProducts().add(product);
        }
        order = repository.save(order);
        return new OrderDTO(order);
    }
}
