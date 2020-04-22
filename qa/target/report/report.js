$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/reqres_in.feature");
formatter.feature({
  "name": "Sample Service Call Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify GET call to \"/api/users?page\u003d2\" returns all users",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" service call to \"https://reqres.in\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.service_call_is_made(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "headers has below data",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.headers_has_below_data(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request has no payload",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.request_has_no_payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "call to \"/api/users?page\u003d2\" is made",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.call_to_request_is_made(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_body_contains(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify GET call to \"/api/users/2\" returns single user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" service call to \"https://reqres.in\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.service_call_is_made(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "headers has below data",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.headers_has_below_data(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request has no payload",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.request_has_no_payload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "call to \"/api/users/2\" is made",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.call_to_request_is_made(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_body_contains(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify POST call to \"/api/users\" creates new user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"POST\" service call to \"https://reqres.in\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.service_call_is_made(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "headers has below data",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.headers_has_below_data(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "request has below payload",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.request_has_below_payload(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "call to \"/api/users\" is made",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.call_to_request_is_made(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response code should be 201",
  "keyword": "When "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response body contains",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.kdrtut.stepdefs.StepdefIntegration.response_body_contains(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});