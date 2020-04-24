package com.kdrtut.service;

import com.kdrtut.controller.Books;
import com.kdrtut.dao.BooksDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService {

    @Autowired
    private BooksDao booksDao;

    public List<Books> getBooks() {
        return booksDao.findAll();
    }

    public Books getBookById(int bookId) {
        return booksDao.findById(bookId).get();
    }

    public Books addNewBook(Books book) {
        return booksDao.save(book);
    }

    public Books updateBook(Books book, int bookId) {
        book.setBookId(bookId);
        return booksDao.save(book);
    }

    public void deleteBook(int bookId) {
        booksDao.deleteById(bookId);
    }
}
