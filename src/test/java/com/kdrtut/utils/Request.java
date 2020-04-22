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
        Map<String, Object> bodyMap = respBody.asMap(String.class, Object.class);
        Set<Map.Entry<String, Object>> entries = bodyMap.entrySet();
        Iterator<Map.Entry<String, Object>> itr = entries.iterator();

        while(itr.hasNext()) {
            Map.Entry<String, Object> expResp = itr.next();
            Object keyValue = expResp.getValue();
            try {
                double d= Double.parseDouble(keyValue.toString());
                if(d==(int)d) {
                    response.then().body(expResp.getKey(), comparesEqualTo(Double.valueOf(d).intValue()));
                } else {
                    response.then().body(expResp.getKey(), comparesEqualTo(d));
                }
            } catch(Exception e) {
                System.out.println(e.fillInStackTrace());
                response.then().body(expResp.getKey(), equalTo(expResp.getValue()));
            }
        }
    }
}
