$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/bookdirectory_local.feature");
formatter.feature({
  "name": "Books directory",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify GET call to \"/books\" returns list of all books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"GET\" service call to \"http://localhost:8080\"",
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
  "name": "call to \"/books\" is made",
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
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path bookPrice doesn\u0027t match.\nExpected: a value equal to \u003c8.89\u003e\n  Actual: [8.89]\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\n\tat io.restassured.specification.ResponseSpecification$body$0.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:212)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\n\tat com.kdrtut.utils.Request.validateResponseBody(Request.java:49)\n\tat com.kdrtut.stepdefs.StepdefIntegration.response_body_contains(StepdefIntegration.java:77)\n\tat ✽.response body contains(file:///Users/khadeer/IdeaProjects/restassuredtut/qa/src/test/resources/features/bookdirectory_local.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/reqres_in.feature");
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