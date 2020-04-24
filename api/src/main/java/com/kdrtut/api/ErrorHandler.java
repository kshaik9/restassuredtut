package com.kdrtut.api;

import com.kdrtut.exception.ApplicationError;
import com.kdrtut.exception.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class ErrorHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApplicationError> handleBookNotFoundException(NotFoundException exception, WebRequest request) {
        ApplicationError applicationError = new ApplicationError();
        applicationError.setErrorCode(101);
        applicationError.setErrorMessage(exception.getMessage());

        return new ResponseEntity<>(applicationError, HttpStatus.NOT_FOUND);
    }
}
