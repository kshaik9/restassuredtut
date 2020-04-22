Feature: Sample Service Call Test

  Scenario: Verify GET call to "/api/users?page=2" returns all users
    Given "GET" service call to "https://reqres.in"
    When headers has below data
      |Content-Type|application/json|
    When request has no payload
    When call to "/api/users?page=2" is made
    Then response code should be 200
    And response body contains
      |page|2|

  Scenario: Verify GET call to "/api/users/2" returns single user
    Given "GET" service call to "https://reqres.in"
    When headers has below data
      |Content-Type|application/json|
    When request has no payload
    When call to "/api/users/2" is made
    Then response code should be 200
    And response body contains
      |data.id|2|
      |data.first_name|Janet|

  Scenario:  Verify POST call to "/api/users" creates new user
    Given "POST" service call to "https://reqres.in"
    When headers has below data
      |Content-Type|application/json|
    When request has below payload
      |name|morpheus|
      |job |author  |
    When call to "/api/users" is made
    When response code should be 201
    And response body contains
      |name|morpheus|
      |job |author  |