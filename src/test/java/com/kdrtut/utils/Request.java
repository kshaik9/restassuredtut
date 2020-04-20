package com.kdrtut.utils;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.simple.JSONObject;

import java.util.Map;

public class Request {
    RequestSpecification request = RestAssured.given();
    Response response;

    public void callTo(Map<String, String> headers, String payload, String method, String host, String baseUrl) {
        switch(method) {
            case("GET"):
                response = request.headers(headers).body(payload).when().get(host + baseUrl);
                break;
            case("POST"):
                response = request.headers(headers).body(payload).when().post(host + baseUrl);
                break;
            default:
                System.out.println("No method to call!");
        }
    }

    public int getResponseCode() {
        return response.getStatusCode();
    }
}
