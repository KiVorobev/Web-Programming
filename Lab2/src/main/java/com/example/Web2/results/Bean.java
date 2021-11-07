package com.example.Web2.results;

import org.kopitubruk.util.json.JSONUtil;

import java.util.HashMap;
import java.util.Map;

public class Bean {
    private double x;
    private double y;
    private double r;
    private String currentTime;
    private long executionTime;
    private boolean result;

    public String jsonBean() {
        return JSONUtil.toJSON(this.getBean());
    }

    private Map<String, String> getBean() {
        Map<String, String> bean = new HashMap<>();
        bean.put("x", String.valueOf(x));
        bean.put("y", String.valueOf(y));
        bean.put("r", String.valueOf(r));
        bean.put("currentTime", String.valueOf(currentTime));
        bean.put("executionTime", String.valueOf(executionTime));
        bean.put("result", String.valueOf(result));
        return bean;
    }


    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }

    @Override
    public String toString() {
        return "Bean{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", currentTime='" + currentTime + '\'' +
                ", executionTime=" + executionTime +
                ", result=" + result +
                '}';
    }
}
