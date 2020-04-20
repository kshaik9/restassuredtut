package com.kdrtut.stepdefs;

import com.kdrtut.config.RequestConfig;
import com.kdrtut.utils.Request;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

import java.util.*;

import io.cucumber.java.en.When;
import org.json.simple.JSONObject;
import org.junit.Assert;

public class StepdefIntegration {

    RequestConfig requestConfig = new RequestConfig();
    Request request = new Request();
    Map<String, String> headers = new HashMap<>();
    JSONObject payload = new JSONObject();

    @Given("{string} service call to {string}")
    public void service_call_is_made(String method, String host) {
        requestConfig.setHost(host);
        requestConfig.setMethod(method);
    }

    @When("headers has below data")
    public void headers_has_below_data(DataTable headers) {
        Map<String, String> actHeaders = headers.asMap(String.class, String.class);
        requestConfig.setHeaders(actHeaders);
    }

    @When("request has no payload")
    public void request_has_no_payload() {
        payload.put("","");
        requestConfig.setPayload(payload);
    }

    @When("request has below payload")
    public void request_has_below_payload(DataTable requestBody) {
        if(requestBody!=null) {
            Map<Object, Object> bodyObjs = requestBody.asMap(String.class, String.class);

            Set<Map.Entry<Object, Object>> entries = bodyObjs.entrySet();

            Iterator<Map.Entry<Object, Object>> itr = entries.iterator();
            while(itr.hasNext()) {
                Map.Entry<Object, Object> next = itr.next();
                payload.put(next.getKey(), next.getValue());
            }
        }
        requestConfig.setPayload(payload);
    }

    @When("call to {string} is made")
    public void call_to_request_is_made(String baseUrl) {
        requestConfig.setBaseUrl(baseUrl);
        request.callTo(requestConfig.getHeaders(), requestConfig.getPayload(),
                requestConfig.getMethod(), requestConfig.getHost(), requestConfig.getBaseUrl());
    }

    @Then("response code should be {int}")
    public void response_code_should_be(int respCode) {
        Assert.assertEquals(respCode, request.getResponseCode());
    }

    @And("response body contains page number")
    public void response_body_contains_page_number(DataTable respBody) {
        request.validateResponseBody(respBody);
    }

    @And("response body contains")
    public void response_body_contains(DataTable respBody) {
        request.validateResponseBody(respBody);
    }
}
