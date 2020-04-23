Feature: Books directory

  Scenario: Verify GET call to "/books" returns list of all books
    Given "GET" service call to "http://localhost:8080"
    When headers has below data
      |Content-Type|application/json|
    When request has no payload
    When call to "/books" is made
    Then response code should be 200
    And response body contains
      |bookPrice|8.89|