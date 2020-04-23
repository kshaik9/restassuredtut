package com.kdrtut.controller;

import com.kdrtut.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class BooksController {

    @Autowired
    private BooksService booksService;

    @GetMapping(value = "/books")
    public List<Books> getBooks() {
        return booksService.getBooks();
    }

    @GetMapping(value = "/books/{bookid}")
    public Books getBook(@PathVariable int bookid) {
        return booksService.getBookById(bookid);
    }

    @PostMapping(value ="/books")
    public List<Books> addBook(@RequestBody Books book) {
        return booksService.addNewBook(book);
    }

    @PutMapping(value = "/books/{bookId}")
    public Books updateBook(@RequestBody Books book, @PathVariable int bookId) {
        return booksService.updateBook(book, bookId);
    }

    @DeleteMapping(value = "/books/{bookId}")
    public void deleteBook(@PathVariable int bookId) {
        booksService.deleteBook(bookId);
    }
}
