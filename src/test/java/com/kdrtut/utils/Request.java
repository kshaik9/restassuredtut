package com.kdrtut.utils;

import io.cucumber.datatable.DataTable;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static org.hamcrest.Matchers.equalTo;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class Request {
    RequestSpecification request = RestAssured.given();
    Response response;

    public void callTo(Map<String, String> headers, String payload, String method, String host, String baseUrl) {
        switch(method) {
            case("GET"):
                response = request.when().headers(headers).body(payload).get(host + baseUrl);
                break;
            case("POST"):
                response = request.when().headers(headers).body(payload).when().post(host + baseUrl);
                break;
            default:
                System.out.println("No method to call!");
        }
    }

    public int getResponseCode() {
        return response.getStatusCode();
    }

    public void validateResponseBody(DataTable respBody) {
        Map<String, String> bodyMap = respBody.asMap(String.class, String.class);
        Set<Map.Entry<String, String>> entries = bodyMap.entrySet();
        Iterator<Map.Entry<String, String>> itr = entries.iterator();

        while(itr.hasNext()) {
            Map.Entry<String, String> expResp = itr.next();
            response.then().body(expResp.getKey(), equalTo((Integer.valueOf(expResp.getValue())) ));
        }
    }
}
