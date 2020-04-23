package com.kdrtut.service;

import com.kdrtut.controller.Books;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class BooksService {

    private List<Books> books = Arrays.asList(
            new Books(1, "Book Amazon", 8.89),
            new Books(2, "Java Fundamentals", 7.99),
            new Books(3, "Spring boot cook book", 11.99)
    );

    public List<Books> getBooks() {
        return books;
    }

    public Books getBookById(int bookId) {
        return books.stream().filter(book -> book.getBookId() == bookId).findFirst().get();
    }
}
