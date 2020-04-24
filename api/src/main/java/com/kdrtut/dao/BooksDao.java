package com.kdrtut.dao;

import com.kdrtut.model.Books;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BooksDao extends CrudRepository<Books, Integer> {
    // getAllBooks()
    // getBook(int bookId)
    // updateBook(Books book)
    // deleteBook(int bookId)

    @Override
    List<Books> findAll();
}
