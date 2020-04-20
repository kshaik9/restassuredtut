Feature: Sample Service Call Test

  Scenario: Verify GET call returns specified user details
    Given "GET" service call to "https://reqres.in"
    When headers has below data
      |Content-Type|application/json|
    When request has no payload
#      |name|morpheus|
#      |job |author  |
    When call to "/api/users?page=2" is made
    Then response code should be 200

  Scenario:  Verify POST call creates new user
    Given "POST" service call to "https://reqres.in"
    When headers has below data
      |Content-Type|application/json|
    When request has below payload
      |name|morpheus|
      |job |author  |
    When call to "/api/users" is made
    When response code should be 201