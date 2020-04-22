package com.kdrtut.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksController {

    @GetMapping("/hello")
    public String sayHello() {
        return "<center><h2>Hello, this Books Directory using Spring-boot!</h2></center>";
    }
}
