package com.kdrtut.utils;

import io.cucumber.datatable.DataTable;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.Matchers;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import static org.hamcrest.Matchers.*;

public class Request {
    RequestSpecification request = RestAssured.given().log().all();
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
        Map<String, Object> bodyMap = respBody.asMap(String.class, String.class);
        Set<Map.Entry<String, Object>> entries = bodyMap.entrySet();
        Iterator<Map.Entry<String, Object>> itr = entries.iterator();

        while(itr.hasNext()) {
            Map.Entry<String, Object> expResp = itr.next();
            Integer keyValue = 0;

            try {
                keyValue = Integer.valueOf(expResp.getValue().toString());
            } catch(Exception e) {
                System.out.println(e.fillInStackTrace());
            }

            if(keyValue > 0) {
                response.then().body(expResp.getKey(), equalTo(keyValue));
            } else {
                response.then().body(expResp.getKey(), equalTo(expResp.getValue()));
            }

        }
    }
}
