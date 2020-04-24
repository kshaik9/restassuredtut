package com.kdrtut.service;

import com.kdrtut.model.Books;
import com.kdrtut.dao.BooksDao;
import com.kdrtut.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BooksService {

    @Autowired
    private BooksDao booksDao;

    public List<Books> getBooks() {
        return booksDao.findAll();
    }

    public Books getBookById(int bookId) {
        Optional<Books> optionalBooks = booksDao.findById(bookId);
        if(!optionalBooks.isPresent()) {
            throw new NotFoundException("Sorry, there is no book associated with the id " + bookId + "!");
        }
        return optionalBooks.get();
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
