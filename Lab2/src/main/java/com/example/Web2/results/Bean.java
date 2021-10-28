package com.example.Web2.results;

import java.util.LinkedList;

import java.util.List;

public class Bean {

    private final List<Data> beanList;
    private static Bean instance;

    private Bean(){
        beanList = new LinkedList<>();
    }

    public static Bean getInstance(){
        if (instance == null) instance = new Bean();
        return instance;
    }

    public List<Data> getBeanList(){
        return beanList;
    }

    public synchronized void addData(Data data) {
        beanList.add(data);
    }
}