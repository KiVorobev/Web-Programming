package com.example.Web2.results;

import java.util.LinkedList;

import java.util.List;

public class Data {

    private final List<Bean> beanList;
    private static Data instance;

    private Data(){
        beanList = new LinkedList<>();
    }

    public static Data getInstance(){
        if (instance == null) instance = new Data();
        return instance;
    }

    public List<Bean> getBeanList(){
        return beanList;
    }

    public synchronized void addBean(Bean bean) {
        beanList.add(bean);
    }
}