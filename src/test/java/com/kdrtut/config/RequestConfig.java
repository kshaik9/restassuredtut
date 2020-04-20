package com.kdrtut.config;

import org.json.simple.JSONObject;
import java.util.Map;

public class RequestConfig {

    Map<String, String> headers;
    String payload;
    String host;
    String baseUrl;
    String method;

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public Map<String, String> getHeaders() {
        return headers;
    }

    public void setHeaders(Map<String, String> headers) {
        this.headers = headers;
    }

    public String getPayload() {
        return payload;
    }

    public void setPayload(JSONObject payload) {
        this.payload = payload.toJSONString();
    }

    public void getEurekaHostName() {

    }

}
